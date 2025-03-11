"use client"

import React, { useState } from 'react'
import { redirect } from 'next/navigation'
import { Loader2 } from 'lucide-react'

import { sendContactEmail } from '@/lib/resend'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Kontakt() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    }

    if (!rawFormData.name || !rawFormData.phone || !rawFormData.email || !rawFormData.message) {
      setLoading(false);
      return
    }

    await sendContactEmail(rawFormData.name, rawFormData.email, rawFormData.phone, rawFormData.message)
      .then(() => {
        redirect('/danke')
      }).finally(() => {
        setLoading(false);
      })
  }

  return (
    <main className='py-16 md:py-32 px-4 md:px-8 lg:px-10'>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div>
          <p className="bg-[#f0f3fa] w-fit px-3 py-1 text-tertiary font-medium uppercase text-center mx-auto">
            Kontakt
          </p>
          <h1 className='text-3xl text-center md:text-5xl font-semibold mt-3 lg:mt-6'>Haben Sie Fragen?</h1>
          <p className='text-black/80 md:text-lg max-w-xl text-center mx-auto mt-2 lg:mt-4'>Haben Sie eine Frage oder Feedback? Füllen Sie das untenstehende Formular aus und wir melden uns bei Ihnen.</p>
          <form className='mt-4 bg-slate-50 p-6 rounded-lg space-y-4' action={handleSubmit}>
            <div>
              <Label className='sr-only' id="name">Ihr Name</Label>
              <Input name="name" id="name" placeholder="Ihr Name" className='lg:h-12 lg:px-4' required />
            </div>
            <div>
              <Label className='sr-only' id="email">Ihr E-Mail Adresse</Label>
              <Input name="email" id="email" type="email" placeholder="Ihre E-Mail Adresse" className='lg:h-12 lg:px-4' required />
            </div>
            <div>
              <Label className='sr-only' id="phone">Ihre Telefonnummer</Label>
              <Input name="phone" id="phone" type="tel" placeholder="Ihre Telefonnummer" className='lg:h-12 lg:px-4' required />
            </div>
            <div>
              <Label className='sr-only' id="message">Ihre Nachricht</Label>
              <Textarea id="message" name="message" placeholder='Ihre Nachricht' rows={4} className='lg:px-4' required />
            </div>
            <Button className='w-full' disabled={loading}>
              {loading && <Loader2 className='animate-spin' />}
              {loading ? "Wird gesendet..." : "Absenden"}
            </Button>
          </form>
        </div>

      </div>
    </main>
  )
}
