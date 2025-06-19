export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    const projectId = getRouterParam(event, 'projectId')

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

    // retrieve all tasks for the project with subtasks
    const tasks = await useDrizzle().query.tasksTable.findMany({
      where: table => eq(table.projectId, projectId),
      orderBy: (table, { desc }) => desc(table.createdAt),
      with: {
        subtasks: true,
      },
    })

    return tasks.map(task => ({
      id: task.id,
      name: task.name,
      status: task.status,
      dueDate: task.dueDate ? task.dueDate.toISOString() : null,
      description: task.description,
      priority: task.priority,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
      projectId: task.projectId,
      subtasks: task.subtasks.map(subtask => ({
        id: subtask.id,
        name: subtask.name,
        is_completed: subtask.is_completed,
        createdAt: subtask.createdAt.toISOString(),
        updatedAt: subtask.updatedAt.toISOString(),
      })),
    }))
  }
  catch (error: any) {
    const errorMessage = error.error ? error.error.message : error.message
    throw createError({
      statusCode: error.statusCode ? error.statusCode : 500,
      statusMessage: `Retrieve Tasks Error: ${errorMessage}!`,
    })
  }
})
