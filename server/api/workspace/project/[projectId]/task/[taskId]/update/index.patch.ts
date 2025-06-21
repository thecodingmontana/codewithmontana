import { v4 as uuidv4 } from 'uuid'
import type { Priority, Status } from '~/types'
import { validPriorities, validStatuses } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    const projectId = getRouterParam(event, 'projectId')
    const taskId = getRouterParam(event, 'taskId')
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

    if (!taskId || typeof taskId !== 'string') {
      throw createError({
        statusCode: 400,
        statusMessage: 'taskID is required!',
      })
    }

    if (typeof name !== 'string' || !name) {
      throw createError({
        statusMessage: 'Invalid name!',
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

    // check if task already exists
    const existingTask = await useDrizzle().query.tasksTable.findFirst({
      where: table => and(
        eq(table.id, taskId),
        eq(table.projectId, projectId),
      ),
    })

    if (!existingTask) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Task not found!',
      })
    }

    // update task
    const [task] = await useDrizzle().update(tables.tasksTable).set({
      name,
      description,
      updatedAt: new Date(),
      priority,
      status,
      dueDate: parsedDueDate,
    }).where(and(
      eq(tables.tasksTable.id, taskId),
      eq(tables.tasksTable.projectId, projectId),
    )).returning()

    // update subtasks
    if (subtasks && subtasks.length > 0) {
      // delete existing subtasks for the task
      await useDrizzle().delete(tables.subtasksTable).where(eq(tables.subtasksTable.taskId, task.id))

      // create new subtasks
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

    return {
      message: 'Task updated successfully',
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
