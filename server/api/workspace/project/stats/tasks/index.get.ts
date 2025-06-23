export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)

    if (!session) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized!',
      })
    }

    // check if user exists
    const user = await useDrizzle().query.userTable.findFirst({
      where: table => eq(table.id, session.user.id),
    })

    if (!user) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid User!',
      })
    }

    // retrieve all user projects with tasks and subtasks
    const projects = await useDrizzle().query.projectTable.findMany({
      where: table => eq(table.userId, session.user.id),
      with: {
        tasks: true,
      },
    })

    // flatten all tasks from all projects
    const allTasks = projects.flatMap(project => project.tasks)

    return allTasks.map(task => ({
      id: task.id,
      name: task.name,
      status: task.status,
      dueDate: task.dueDate ? task.dueDate.toISOString() : null,
      description: task.description,
      priority: task.priority,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
      projectId: task.projectId,
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
