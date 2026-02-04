'use server'

export type ContactFormState = {
  success: boolean
  message: string
}

export async function submitContact(_: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const payload = {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    interest: String(formData.get('interest') || ''),
    message: String(formData.get('message') || ''),
  }

  console.log('New contact submission:', payload)

  return {
    success: true,
    message: 'Thank you. Your message has been sent. I will be in touch soon.',
  }
}
