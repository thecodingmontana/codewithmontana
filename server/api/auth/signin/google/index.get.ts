import type { H3Event } from 'h3'

export default defineOAuthGoogleEventHandler({
  config: {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async onSuccess(event: H3Event, { user }: any) {
    await authenticateOauthUser({
      providerName: 'google',
      providerUserEmail: user.email,
      providerUserId: user.sub,
      providerUsername: user.name,
      providerAvatar: user.picture,
    }, event)
    return sendRedirect(event, '/workspace/dashboard')
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError(event: H3Event, error: any) {
    console.error('OAuth error:', error)
    return sendRedirect(event, '/auth/signin')
  },
})
