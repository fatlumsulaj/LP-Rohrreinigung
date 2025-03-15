import { Facebook, Instagram, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-main text-white mt-0 md:mt-[-80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-32">
        {/* Top section with logo and social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-2xl font-bold mb-4 md:mb-0">Rohrreinigung 24/7</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Rohrreinigung
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Kanalreinigung
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Verstopfungen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Notdienst
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+49 174 9634925" className="hover:text-blue-400 transition-colors">
                  +49 174 9634925
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@rohrreinigung.de" className="hover:text-blue-400 transition-colors">
                  lp.konstruktion1@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicegebiet</h3>
            <ul className="space-y-2">
              <li>Passau</li>
              <li>Salzweg</li>
              <li>Grubweg</li>
              <li>Tiefenbach</li>
              <li>Freyung</li>
              <li>Hacklberg</li>
            </ul>
          </div>

          {/* Business Hours Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                24/7 Notdienst
              </li>
              <li>Mo-Sa: 08:00 - 1/:00</li>
              <li>So: Notdienst</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">© 2024 Rohrreinigung 24/7. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <Link href="/impressum" className="hover:text-blue-400 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-blue-400 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

