import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

export default function CallToAction() {
  return (
    <div className="mx-auto lg:px-8 relative z-20 ">
      <div className="bg-blue-600 max-w-7xl mx-auto">
        <div className="rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-0 md:mr-8">
            Rohrverstopfung? <br className="hidden md:inline" />
            Rufen Sie uns jetzt an!
          </h2>
          <a href="tel:+49 174 9634925">
            <Button>
              24/7 Notdienst <ArrowRight className="size-5" />
            </Button>
          </a>
          
        </div>
      </div>
    </div>
  )
}

