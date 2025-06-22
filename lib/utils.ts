import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { sha256 } from '@oslojs/crypto/sha2'
import {
  encodeHexLowerCase,
} from '@oslojs/encoding'
import { isAfter } from 'date-fns'
import type { Session } from '~/server/libs/session'
import type { User } from '~/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}

export const getSessionStatus = (payload: { token: string, session: Session }): 'current' | 'active' | 'inactive' => {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(payload.token)))

  if (sessionId === payload.session.id) {
    return 'current'
  }

  return isAfter(new Date(payload.session.expiresAt), new Date()) ? 'active' : 'inactive'
}

export const getSessionStatusIcon = (payload: { token: string, session: Session }): string => {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(payload.token)))

  if (sessionId === payload.session.id) {
    return 'solar:check-circle-bold'
  }

  return isAfter(new Date(payload.session.expiresAt), new Date()) ? 'solar:check-circle-bold' : 'solar:alarm-sleep-outline'
}

export function isValidEmail(email: string): boolean {
  return /.+@.+/.test(email)
}

export function isValidName(name: string): boolean {
  return /^[a-zA-Z\s-'']+$/.test(name)
}

export function get2FARedirect(user: User, defaultPath: string): string {
  if (user.registeredPasskey && !user.twoFactorVerified) {
    return '/auth/two-factor'
  }
  if (user.registeredTOTP && !user.twoFactorVerified) {
    return '/auth/two-factor'
  }
  return defaultPath
}

export const formatDateForPicker = (dateValue: string | Date | null | undefined): string | undefined => {
  if (!dateValue) return undefined // This handles null, undefined, and empty string

  try {
    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue
    if (isNaN(date.getTime())) return undefined

    // @internationalized/date parseDate expects YYYY-MM-DD format
    return date.toISOString().split('T')[0]
  }
  catch {
    return undefined
  }
}
