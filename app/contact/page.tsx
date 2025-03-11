import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero section with blue background */}
      <div className="bg-blue-900 text-white py-16 lg:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Brauchen Sie weitere <span className="text-blue-300">Informationen?</span>
          </h1>
          <p className="text-center max-w-3xl mx-auto">
          Zögern Sie nicht, uns über die untenstehenden Optionen zu kontaktieren. Unser engagiertes Team wird Ihre Anfrage umgehend beantworten.
          </p>

          <div className="flex items-center justify-center mt-8 text-sm">
            <Link href="/" className="hover:underline">
            Startseite
            </Link>
            <span className="mx-2">›</span>
            <span>Kontakt</span>
          </div>
        </div>
      </div>

      {/* Contact form section */}
      <div className="relative">
        {/* Wave effect */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-blue-900" style={{ borderRadius: "0 0 100% 100%" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Form section */}
              <div className="p-8 md:p-12">
                <div className="uppercase text-blue-600 font-semibold text-sm tracking-wider mb-4">Kontakt</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Wie können wir Ihnen helfen?</h2>
                <p className="text-gray-600 mb-8">
                Haben Sie eine Frage oder Feedback? Füllen Sie das untenstehende Formular aus, und wir melden uns so schnell wie möglich bei Ihnen.
                </p>

                <form className="space-y-4">
                  <div>
                    <Input type="text" placeholder="Name" className="bg-white border-gray-200" />
                  </div>
                  <div>
                    <Input type="email" placeholder="E-Mail-Adresse" className="bg-white border-gray-200" />
                  </div>
                  <div>
                    <Textarea placeholder="Nachricht" className="bg-white border-gray-200 min-h-[150px]" />
                  </div>
                  <div>
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium">
                    Senden
                    </Button>
                  </div>
                </form>
              </div>

              {/* Image section with testimonial */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src="https://ik.imagekit.io/inowebagentur/LP%20Rohrreinigung/rohrreinigung%20hero.jpg?updatedAt=1740095216219"
                  alt="Handyman professional"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                  <blockquote className="text-xl font-medium mb-4">
                  Ihr Problem, unsere Lösung – schnelle und professionelle Rohrreinigung für dauerhaft freie Leitungen!
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

