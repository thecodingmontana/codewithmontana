import { v4 as uuidv4 } from 'uuid'
import type { Priority, Status } from '~/types'
import { validPriorities, validStatuses } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    const projectId = getRouterParam(event, 'projectId')
    const { name, status, dueDate, description, priority, subtasks } = await readBody(event) as {
      description?: string
      dueDate?: string | Date
      name: string
      status: Status
      priority: Priority
      subtasks?: { name: string, is_completed: boolean }[]
    }

    if (!session) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized!',
      })
    }

    if (!projectId || typeof projectId !== 'string') {
      throw createError({
        statusCode: 400,
        statusMessage: 'ProjectID is required!',
      })
    }

    if (typeof name !== 'string' || !name) {
      throw createError({
        statusMessage: 'Invalid title!',
        statusCode: 400,
      })
    }

    if (typeof status !== 'string' || !validStatuses.includes(status)) {
      throw createError({
        statusMessage: 'Invalid Status!',
        statusCode: 400,
      })
    }

    if (typeof priority !== 'string' || !validPriorities.includes(priority)) {
      throw createError({
        statusMessage: 'Invalid Priority!',
        statusCode: 400,
      })
    }

    if (description !== undefined && typeof description !== 'string') {
      throw createError({
        statusMessage: 'Invalid description!',
        statusCode: 400,
      })
    }

    if (dueDate !== undefined && typeof dueDate !== 'string' && !(dueDate instanceof Date)) {
      throw createError({
        statusMessage: 'Invalid due date!',
        statusCode: 400,
      })
    }

    if (
      subtasks !== undefined
      && (!Array.isArray(subtasks)
        || !subtasks.every(item =>
          typeof item === 'object'
          && item !== null
          && 'name' in item
          && 'is_completed' in item
          && typeof item.name === 'string'
          && typeof item.is_completed === 'boolean',
        ))
    ) {
      throw createError({
        statusMessage: 'Invalid subtasks!',
        statusCode: 400,
      })
    }

    const parsedDueDate = dueDate ? new Date(dueDate) : undefined

    if (parsedDueDate && isNaN(parsedDueDate.getTime())) {
      throw createError({
        statusMessage: 'Invalid due date!',
        statusCode: 400,
      })
    }

    // check if project exists
    const project = await useDrizzle().query.projectTable.findFirst({
      where: table => eq(table.id, projectId),
    })

    if (!project) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid Project!',
      })
    }

    // create new task
    const [task] = await useDrizzle().insert(tables.tasksTable).values({
      id: uuidv4(),
      name,
      projectId,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
      priority,
      status,
      dueDate: parsedDueDate,
    }).returning()

    // create subtasks if provided
    if (subtasks && subtasks.length > 0) {
      const subtaskValues = subtasks.map(subtask => ({
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        name: subtask.name,
        taskId: task.id,
        is_completed: subtask.is_completed,
      }))

      await useDrizzle().insert(tables.subtasksTable).values(subtaskValues)
    }

    // save the task activity if task is either status is changed to 'COMPLETED' or 'IN REVIEW' or 'ABANDONED'
    if (['COMPLETED', 'IN REVIEW', 'ABANDONED'].includes(status)) {
      await useDrizzle().insert(tables.tasksActivityTable).values({
        id: uuidv4(),
        taskId: task.id,
        changedBy: session.user.id,
        status,
        changedAt: new Date(),
      })
    }

    return {
      message: 'Task created successfully',
      task,
    }
  }
  catch (error: any) {
    const errorMessage = error.error ? error.error.message : error.message
    throw createError({
      statusCode: error.statusCode ? error.statusCode : 500,
      statusMessage: `Create Task error: ${errorMessage}!`,
    })
  }
})
