'use client'

import { useFormState } from 'react-dom'
import { submitContact, type ContactFormState } from '@/app/contact/actions'

const initialState: ContactFormState = {
  success: false,
  message: '',
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState)

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="space-y-2">
          <span className="font-inter text-sm text-dark-kakao/80">Name</span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-warm-sand/40 bg-white/90 px-4 py-3 font-inter text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-deep-reef"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="font-inter text-sm text-dark-kakao/80">Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-warm-sand/40 bg-white/90 px-4 py-3 font-inter text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-deep-reef"
            placeholder="you@email.com"
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="font-inter text-sm text-dark-kakao/80">I’m interested in</span>
        <select
          name="interest"
          className="w-full rounded-xl border border-warm-sand/40 bg-white/90 px-4 py-3 font-inter text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-deep-reef"
          defaultValue=""
          required
        >
          <option value="" disabled>Select an option</option>
          <option value="Group Yoga Classes">Group Yoga Classes</option>
          <option value="Private Yoga Sessions">Private Yoga Sessions</option>
          <option value="1:1 Integrative Coaching">1:1 Integrative Coaching</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>

      <label className="space-y-2 block">
        <span className="font-inter text-sm text-dark-kakao/80">Message</span>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-xl border border-warm-sand/40 bg-white/90 px-4 py-3 font-inter text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-deep-reef"
          placeholder="Share a little about what you’re seeking. You can keep it simple."
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-soft-clay px-6 py-3 font-inter text-sm text-white-coral transition-all duration-200 hover:bg-soft-clay/90"
      >
        Send message
      </button>

      {state.message && (
        <p
          className={`font-inter text-sm ${state.success ? 'text-deep-reef' : 'text-dark-kakao'}`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <p className="font-inter text-xs text-dark-kakao/60">
        Your information is only used to respond to your inquiry. No mailing lists, no sharing.
      </p>
    </form>
  )
}
