import { type InferSelectModel, relations } from 'drizzle-orm'
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

export const statusEnum = pgEnum('status', [
  'IDEA',
  'TODO',
  'IN PROGRESS',
  'IN REVIEW',
  'COMPLETED',
  'ABANDONED',
])
export const priorityEnum = pgEnum('priority', [
  'HIGH',
  'MEDIUM',
  'LOW',
  'NONE',
])

export const userTable = pgTable(
  'user',
  {
    id: text('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    username: varchar('username', { length: 255 }).notNull(),
    password: text('password'),
    emailVerified: boolean('email_verified').notNull().default(false),
    registered2FA: boolean('registered2FA').notNull().default(false),
    recoveryCode: text('recovery_code').notNull(),
    profilePictureUrl: text('profile_picture_url'),
    createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
    updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
  },
  table => ({
    emailIndex: index('email_index').on(table.email),
  }),
)

export const uniqueCodeTable = pgTable('unique-code-request', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  code: text('code').notNull(),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const sessionTable = pgTable('session', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
  twoFactorVerified: boolean('two_factor_verified').notNull().default(false),
  ipAddress: varchar('ip_address', { length: 100 }),
  location: text('location'),
  device: text('device'),
  browser: text('browser'),
  os: text('os'),
})

export const passwordResetSession = pgTable('password_reset_session', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  email: varchar('email', { length: 255 }).notNull(),
  code: varchar('code', { length: 255 }).notNull(),
  expiresAt: integer('expires_at').notNull(),
  emailVerified: boolean('email_verified').notNull().default(false),
  twoFactorVerified: boolean('two_factor_verified').notNull().default(false),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const totpCredential = pgTable('totp_credential', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: text('user_id')
    .notNull()
    .unique()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  key: text('key').notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const passkeysTable = pgTable('passkeys', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  publicKey: text('publicKey').notNull(),
  counter: integer('counter').notNull(),
  backedUp: boolean('backedUp').notNull().default(false),
  transports: text('transports').notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const oauthAccountTable = pgTable('oauth_account', {
  id: text('id').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  provider: text('provider').notNull(),
  providerUserId: text('provider_user_id').notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const cronJobTable = pgTable('cron_jobs', {
  id: uuid().notNull().primaryKey().defaultRandom(),
  message: text('message'),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  }).defaultNow(),
})

export const projectTable = pgTable('project', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  status: statusEnum('status').default('IDEA').notNull(),
  priority: priorityEnum('priority').default('NONE').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  dueDate: timestamp('due_date', { mode: 'date' }),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const tasksTable = pgTable('tasks', {
  id: text('id').primaryKey(),
  name: text('title').notNull(),
  description: text('description'),
  status: statusEnum('status').default('IDEA').notNull(),
  priority: priorityEnum('priority').default('NONE').notNull(),
  projectId: text('userId')
    .notNull()
    .references(() => projectTable.id, { onDelete: 'cascade' }),
  dueDate: timestamp('due_date', { mode: 'date' }),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const tasksActivityTable = pgTable('tasks_activity', {
  id: text('id').primaryKey(),
  status: statusEnum('status').default('IDEA').notNull(),
  taskId: text('task_id')
    .notNull()
    .references(() => tasksTable.id, { onDelete: 'cascade' }),
  changedBy: text('changed_by')
    .notNull()
    .references(() => userTable.id),
  changedAt: timestamp('changed_at', { mode: 'date', precision: 3 }).notNull(),
})

export const subtasksTable = pgTable('subtasks', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  taskId: text('projectId')
    .notNull()
    .references(() => tasksTable.id, { onDelete: 'cascade' }),
  is_completed: boolean('is_completed').default(false).notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

// relations
export const userRelations = relations(userTable, ({ many }) => ({
  credentials: many(passkeysTable),
  projects: many(projectTable),
  tasks_activities: many(tasksActivityTable),
}))

export const projectsRelations = relations(
  projectTable,
  ({ one, many }) => ({
    user: one(userTable, {
      fields: [projectTable.userId],
      references: [userTable.id],
    }),
    tasks: many(tasksTable),
  }),
)

export const tasksRelations = relations(
  tasksTable,
  ({ one, many }) => ({
    project: one(projectTable, {
      fields: [tasksTable.projectId],
      references: [projectTable.id],
    }),
    subtasks: many(subtasksTable),
    activities: many(tasksActivityTable),
  }),
)

export const subtasksRelations = relations(
  subtasksTable,
  ({ one }) => ({
    task: one(tasksTable, {
      fields: [subtasksTable.taskId],
      references: [tasksTable.id],
    }),
  }),
)

export const tasksActivityRelations = relations(
  tasksActivityTable,
  ({ one }) => ({
    task: one(tasksTable, {
      fields: [tasksActivityTable.taskId],
      references: [tasksTable.id],
    }),
    user: one(userTable, {
      fields: [tasksActivityTable.changedBy],
      references: [userTable.id],
    }),
  }),
)

export const passkeysRelations = relations(
  passkeysTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [passkeysTable.userId],
      references: [userTable.id],
    }),
  }),
)

export type User = InferSelectModel<typeof userTable>
export type Session = InferSelectModel<typeof sessionTable>
