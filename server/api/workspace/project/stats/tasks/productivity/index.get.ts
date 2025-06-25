import { startOfWeek, endOfWeek, subWeeks } from 'date-fns'
import { and, between, eq, sql } from 'drizzle-orm'
import { weekDays } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    const query = getQuery(event)

    const range = query.range

    if (!session) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized!',
      })
    }

    if (!range || (range !== 'last' && range !== 'this')) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid Range! Use "last" or "this".',
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

    const baseDate = new Date()
    const weekStart = range === 'last'
      ? startOfWeek(subWeeks(baseDate, 1), { weekStartsOn: 1 })
      : startOfWeek(baseDate, { weekStartsOn: 1 })
    const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 })

    // Fetch grouped activity counts
    const result = await useDrizzle()
      .select({
        day: sql`TO_CHAR(${tables.tasksActivityTable.changedAt}, 'Dy')`.as('day'),
        status: tables.tasksActivityTable.status,
        count: sql<number>`COUNT(*)`.as('count'),
      })
      .from(tables.tasksActivityTable)
      .where(
        and(
          eq(tables.tasksActivityTable.changedBy, session.user.id),
          between(tables.tasksActivityTable.changedAt, weekStart, weekEnd),
        ),
      )
      .groupBy(
        sql`TO_CHAR(${tables.tasksActivityTable.changedAt}, 'Dy')`,
        tables.tasksActivityTable.status,
      )

    // Normalize into a chart-friendly format
    const merged = weekDays.map((day) => {
      const dayData = result.filter(r => String(r.day).trim() === day)

      return {
        day,
        completed:
          dayData.find(r => r.status === 'COMPLETED')?.count ?? 0,
        inReview:
          dayData.find(r => r.status === 'IN REVIEW')?.count ?? 0,
        abandoned:
          dayData.find(r => r.status === 'ABANDONED')?.count ?? 0,
      }
    })

    return merged
  }
  catch (error: any) {
    const errorMessage = error.error ? error.error.message : error.message
    throw createError({
      statusCode: error.statusCode ? error.statusCode : 500,
      statusMessage: `Tasks Weekly Productivity Stats Error: ${errorMessage}!`,
    })
  }
})
