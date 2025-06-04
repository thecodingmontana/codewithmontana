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
  username: string | null
  emailVerified: boolean
  registeredTOTP: boolean
  registeredPasskey: boolean
  registered2FA: boolean
  avatar: string
  twoFactorVerified: boolean
}
