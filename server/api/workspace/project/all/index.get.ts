import { desc } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)

    if (!session) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized!',
      })
    }

    // fecth all user projects
    const projects = await useDrizzle().query.projectTable.findMany({
      where: table => eq(
        table.userId, session.user.id,
      ),
      with: {
        user: {
          columns: {
            profilePictureUrl: true,
          },
        },
      },
      orderBy: desc(tables.projectTable.createdAt),
    })

    return projects
  }

  catch (error: any) {
    const errorMessage = error.error ? error.error.message : error.message
    throw createError({
      statusCode: error.statusCode ? error.statusCode : 500,
      statusMessage: `${errorMessage}!`,
    })
  }
})
