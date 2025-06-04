import type { WebAuthnUserCredential } from '../libs/webauthn'

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
