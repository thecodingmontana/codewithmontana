import { v4 as uuidv4 } from 'uuid'
import type { Priority, Status } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)

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

    if (typeof title !== 'string' || !title) {
      throw createError({
        statusMessage: 'Invalid title!',
        statusCode: 400,
      })
    }

    if (typeof status !== 'string' || !status) {
      throw createError({
        statusMessage: 'Invalid Status!',
        statusCode: 400,
      })
    }

    if (typeof priority !== 'string' || !priority) {
      throw createError({
        statusMessage: 'Invalid title!',
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

    // create new project
    await useDrizzle().insert(tables.projectTable).values({
      id: uuidv4(),
      title,
      userId: session.user.id,
      description,
      dueDate: parsedDueDate,
      priority,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return {
      message: 'Project created successfully!',
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
