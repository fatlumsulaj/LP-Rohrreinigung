import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-20 ">
      <div className="bg-blue-600 max-w-7xl mx-auto">
        <div className="rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-0 md:mr-8">
            Rohrverstopfung? <br className="hidden md:inline" />
            Rufen Sie uns jetzt an!
          </h2>
          <a
            href="tel:+49123456789"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-navy-900 font-medium py-3 px-6 rounded-md transition-colors self-start md:self-center whitespace-nowrap"
          >
            24/7 Notdienst
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

