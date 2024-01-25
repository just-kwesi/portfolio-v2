import ContactForm from '@/app/ui/contact/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page, tell me what you think',
}

export default function contact() {
  return (
    <main>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 pl-6 max-w-screen-md mx-auto mb-5 pt-6">
        Contact Me
      </h2>
      <div>
        <ContactForm />
      </div>
    </main>
  )
}
