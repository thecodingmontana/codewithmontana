import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export const waitlistSchema = toTypedSchema(z.object({
  email: z.string().email({
    message: 'Invalid email!',
  }),
}))

export const sendUniqueCodeSchema = toTypedSchema(z.object({
  email: z.string().email('Email is invalid!'),
}))

export const onboardingProfileSchema = toTypedSchema(z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
}))

export const onboardingWorkspaceSchema = toTypedSchema(z.object({
  name: z.string().min(1, 'Name is required!'),
}))

export const signinFormSchema = toTypedSchema(z.object({
  code: z.string().max(8, {
    message: 'Code shouldn\'t be more than 8 characters.',
  }).min(8, {
    message: 'Code shouldn\'t be less than 8 characters.',
  }),
}))

export const twoFactorSetupSchema = toTypedSchema(z.object({
  code: z.array(z.coerce.string()).length(6, {
    message: 'Code shouldn\'t be less than 6 characters',
  }),
}))

export const registerSecurityKeysSchema = toTypedSchema(z.object({
  name: z.string().max(32, {
    message: 'Maximum name length 32 chars!',
  }).min(3, {
    message: 'Minimum name length 3 chars!',
  }),
}))
export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: TechStack[]
  github: string
  color: string
  website?: string
  is_working: boolean
  image_url: string
}

export interface TechStack {
  name: string
  icon: string
}

export interface User {
  id: string
  email: string
  username: string
  emailVerified: boolean
  registeredTOTP: boolean
  registeredPasskey: boolean
  registered2FA: boolean
  avatar: string
  twoFactorVerified: boolean
}

export type ModalType = 'joinWaitlist' | 'setupAuthenticatorApp' | 'setupPasskeys' | 'setupSecurityKeys' | 'signout' | 'createWorkspace' | 'setupPassword' | 'resetPassword' | 'transferOwnership' | 'deleteWorkspace' | 'mobileSidebar' | 'inviteTeammate' | 'notificationCenter' | 'changeTeammateRole' | 'totpAuthentication' | 'deleteAccount'

export interface ModalData {
  qrcode?: string
  encodedTOTPKey?: string
  encodedCredentialUserId?: string
  user?: User
  encodedCredentialIds?: string[]
}

export interface ModalStore {
  type: ModalType | null
  isOpen: boolean
  data: ModalData
}

export interface WorkspaceBreadcrumb {
  name: string
  path: string
  children: WorkspaceBreadcrumb[] | null
}

export interface WorkspaceStore {
  isOpenSidebar: boolean
  breadcrumb: WorkspaceBreadcrumb | null
}
