import { render } from '@vue-email/render'
import UniqueCodeRequest from '../templates/UniqueCodeRequest.vue'
import { resend } from '~/server/libs/resend'

interface Props {
  code: string
  email: string
}

export async function sendUniqueCodeRequest({ code, email }: Props) {
  try {
    const html = await render(UniqueCodeRequest, {
      code,
    }, {
      pretty: true,
    })

    await resend.emails.send({
      from: 'Team use-odama <noreply@thecodingmontana.com>',
      to: [email],
      subject: `Your unique use-odama sign up code is ${code}`,
      html,
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    throw new Error(error.message)
  }
}
