import { encodeHexLowerCase } from '@oslojs/encoding'
import { and, eq } from 'drizzle-orm'
import { tables, useDrizzle } from '~/server/utils/drizzle'

const challengeBucket = new Set<string>()

export function createWebAuthnChallenge(): Uint8Array {
  const challenge = new Uint8Array(20)
  crypto.getRandomValues(challenge)
  const encoded = encodeHexLowerCase(challenge)
  challengeBucket.add(encoded)
  return challenge
}

export function verifyWebAuthnChallenge(challenge: Uint8Array): boolean {
  const encoded = encodeHexLowerCase(challenge)
  return challengeBucket.delete(encoded)
}

export async function getUserPasskeyCredentials(
  userId: string,
): Promise<WebAuthnUserCredential[]> {
  const rows = await useDrizzle()
    .select()
    .from(tables.passkeyCredential)
    .where(eq(tables.passkeyCredential.userId, userId))

  return rows.map(row => ({
    id: new Uint8Array(Buffer.from(row.id, 'base64')),
    userId: row.userId,
    name: row.name,
    algorithmId: row.algorithm,
    publicKey: new Uint8Array(Buffer.from(row.publicKey, 'base64')),
    createdAt: row.createdAt,
  }))
}

export async function getPasskeyCredential(
  credentialId: Uint8Array,
): Promise<WebAuthnUserCredential | null> {
  const credentialIdString = Buffer.from(credentialId).toString('base64')

  const row = await useDrizzle()
    .select()
    .from(tables.passkeyCredential)
    .where(eq(tables.passkeyCredential.id, credentialIdString))
    .limit(1)
  if (row.length === 0)
    return null

  return {
    id: new Uint8Array(Buffer.from(row[0].id, 'base64')),
    userId: row[0].userId,
    name: row[0].name,
    algorithmId: row[0].algorithm,
    publicKey: new Uint8Array(Buffer.from(row[0].publicKey, 'base64')),
    createdAt: row[0].createdAt,
  }
}

export async function getUserPasskeyCredential(
  userId: string,
  credentialId: Uint8Array,
): Promise<WebAuthnUserCredential | null> {
  const credentialIdString = Buffer.from(credentialId).toString('base64')

  const row = await useDrizzle()
    .select()
    .from(tables.passkeyCredential)
    .where(
      and(
        eq(tables.passkeyCredential.id, credentialIdString),
        eq(tables.passkeyCredential.userId, userId),
      ),
    )
    .limit(1)
  if (row.length === 0)
    return null
  return {
    id: new Uint8Array(Buffer.from(row[0].id, 'base64')),
    userId: row[0].userId,
    name: row[0].name,
    algorithmId: row[0].algorithm,
    publicKey: new Uint8Array(Buffer.from(row[0].publicKey, 'base64')),
    createdAt: row[0].createdAt,
  }
}

export async function createPasskeyCredential(
  credential: WebAuthnUserCredential,
): Promise<void> {
  const credentialId = Buffer.from(credential.id).toString('base64')
  const publicKey = Buffer.from(credential.publicKey).toString('base64')

  await useDrizzle().insert(tables.passkeyCredential).values({
    id: credentialId,
    userId: credential.userId,
    name: credential.name,
    algorithm: credential.algorithmId,
    publicKey,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

export async function deleteUserPasskeyCredential(
  userId: string,
  credentialId: Uint8Array,
): Promise<boolean> {
  const credentialIdString = Buffer.from(credentialId).toString('base64')
  const result = await useDrizzle()
    .delete(tables.passkeyCredential)
    .where(
      and(
        eq(tables.passkeyCredential.id, credentialIdString),
        eq(tables.passkeyCredential.userId, userId),
      ),
    )
    .returning()
  return result.length > 0
}

export async function getUserSecurityKeyCredentials(
  userId: string,
): Promise<WebAuthnUserCredential[]> {
  const rows = await useDrizzle()
    .select()
    .from(tables.securityKeyCredential)
    .where(eq(tables.securityKeyCredential.userId, userId))
  return rows.map(row => ({
    id: new Uint8Array(Buffer.from(row.id, 'base64')),
    userId: row.userId,
    name: row.name,
    algorithmId: row.algorithm,
    publicKey: new Uint8Array(Buffer.from(row.publicKey, 'base64')),
    createdAt: row.createdAt,
  }))
}

export async function getUserSecurityKeyCredential(
  userId: string,
  credentialId: Uint8Array,
): Promise<WebAuthnUserCredential | null> {
  const credentialIdString = Buffer.from(credentialId).toString('base64')

  const row = await useDrizzle()
    .select()
    .from(tables.securityKeyCredential)
    .where(
      and(
        eq(tables.securityKeyCredential.id, credentialIdString),
        eq(tables.securityKeyCredential.userId, userId),
      ),
    )
    .limit(1)
  if (row.length === 0)
    return null

  const encryptedId = new Uint8Array(Buffer.from(row[0].id, 'base64'))
  const encryptedPublicKey = new Uint8Array(
    Buffer.from(row[0].publicKey, 'base64'),
  )

  return {
    id: encryptedId,
    userId: row[0].userId,
    name: row[0].name,
    algorithmId: row[0].algorithm,
    publicKey: encryptedPublicKey,
    createdAt: row[0].createdAt,
  }
}

export async function createSecurityKeyCredential(
  credential: WebAuthnUserCredential,
): Promise<void> {
  const credentialId = Buffer.from(credential.id).toString('base64')
  const publicKey = Buffer.from(credential.publicKey).toString('base64')

  await useDrizzle().insert(tables.securityKeyCredential).values({
    id: credentialId,
    userId: credential.userId,
    name: credential.name,
    algorithm: credential.algorithmId,
    publicKey,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

export async function deleteUserSecurityKeyCredential(
  userId: string,
  credentialId: Uint8Array,
): Promise<boolean> {
  const credentialString = Buffer.from(credentialId).toString('base64')

  const result = await useDrizzle()
    .delete(tables.securityKeyCredential)
    .where(
      and(
        eq(tables.securityKeyCredential.id, credentialString),
        eq(tables.securityKeyCredential.userId, userId),
      ),
    )
    .returning()
  return result.length > 0
}

export interface WebAuthnUserCredential {
  id: Uint8Array
  userId: string
  name: string
  algorithmId: number
  publicKey: Uint8Array
  createdAt: Date
}
