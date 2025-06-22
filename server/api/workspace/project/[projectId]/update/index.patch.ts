import { validPriorities, validStatuses, type Priority, type Status } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    const projectId = getRouterParam(event, 'projectId')

    const { title, status, dueDate, description, priority } = await readBody(event) as { description: string
      dueDate: Date | undefined
      title: string
      status: Status
      priority: Priority
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

    if (typeof title !== 'string' || !title) {
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

    if (dueDate !== undefined && typeof dueDate !== 'string') {
      throw createError({
        statusMessage: 'Invalid due date!',
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

    // update project
    await useDrizzle().update(tables.projectTable).set({
      updatedAt: new Date(),
      status,
      description,
      dueDate: parsedDueDate,
      priority,
      title,
    }).where(and(
      eq(tables.projectTable.id, projectId),
      eq(tables.projectTable.userId, session.user.id),
    ))

    return {
      message: 'Project updated successfully!',
    }
  }

  catch (error: any) {
    const errorMessage = error.error ? error.error.message : error.message
    throw createError({
      statusCode: error.statusCode ? error.statusCode : 500,
      statusMessage: `${errorMessage}!`,
    })
  }
})
