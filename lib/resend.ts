"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(name: any, email: any, phoneNumber: any, message: any) {
  return await resend.emails.send({
    from: 'Website <noreply@lindritsulaj.com>',
    to: ['lp.konstruktion1@gmail.com', 'sulajlindrit@gmail.com'],
    subject: 'Neue Nachricht von Ihrer Website lp-rohrreinigung.de',
    html: `
      <p>Name: ${name}</p>
      <p>E-Mail: ${email}</p>
      <p>Telefonnummer: ${phoneNumber}</p>
      <p>Nachricht: ${message}</p>
    `
  })
}