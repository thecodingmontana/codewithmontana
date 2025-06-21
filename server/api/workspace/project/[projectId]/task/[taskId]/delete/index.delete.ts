export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    const projectId = getRouterParam(event, 'projectId')
    const taskId = getRouterParam(event, 'taskId')

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

    // delete task
    await useDrizzle().delete(tables.tasksTable).where(
      and(
        eq(tables.tasksTable.id, taskId),
        eq(tables.tasksTable.projectId, projectId),
      ),
    )

    return {
      message: 'Task deleted successfully',
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
