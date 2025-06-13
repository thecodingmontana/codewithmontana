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
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

export const subtasksTable = pgTable('subtasks', {
  id: text('id').primaryKey(),
  projectId: text('projectId')
    .notNull()
    .references(() => projectTable.id, { onDelete: 'cascade' }),
  is_completed: boolean('is_completed').default(false).notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).notNull(),
})

// relations
export const userRelations = relations(userTable, ({ many }) => ({
  credentials: many(passkeysTable),
  projects: many(projectTable),
}))

export const projectsRelations = relations(
  projectTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [projectTable.userId],
      references: [userTable.id],
    }),
  }),
)

export const subtasksRelations = relations(
  subtasksTable,
  ({ one }) => ({
    project: one(projectTable, {
      fields: [subtasksTable.projectId],
      references: [projectTable.id],
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
