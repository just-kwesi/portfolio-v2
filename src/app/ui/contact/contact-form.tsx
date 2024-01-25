'use client'

import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { Textarea } from '@/app/ui/textarea'
import { Button } from '@/app/ui/button'
import { toast } from '@/app/ui/use-toast'
import SocialLinks from '@/app/ui/social-links'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mwkwenko')

  if (state.succeeded) {
    toast({
      title: 'Successful',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            Your Message has been successfully sent
          </code>
        </pre>
      ),
    })
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md mx-auto border-none space-x-4 mt-8"
      >
        <fieldset
          id="fs-frm-inputs"
          className="flex flex-col justify-center items-center gap-6"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="full-name">Name</Label>
            <Input
              type="text"
              name="name"
              id="full-name"
              placeholder="Name"
              required
            />
            <ValidationError
              prefix="Name"
              field="full-name"
              errors={state.errors}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-sky-blue"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div>
            <Button type="submit" disabled={state.submitting}>
              Submit
            </Button>
          </div>
          <SocialLinks />
        </fieldset>
      </form>
    </div>
  )
}
