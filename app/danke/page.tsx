import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Danke() {
  return (
    <main>
      <div className="px-4 md:px-8 lg:px-10 py-16 md:py-32">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <h1 className='text-3xl md:text-left md:text-5xl font-semibold text-center'>Danke für Ihre Nachricht!</h1>
          <p className='lg:text-lg text-black/80 mt-2 lg:mt-4 max-w-lg mx-auto text-center'>Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
          <Link href="/" className='inline-block mt-4'>
            <Button size="lg"><ArrowLeft /> Zur Startseite</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}