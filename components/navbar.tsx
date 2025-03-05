import React from "react";
import { PhoneCall, MapPin, Clock8, Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="bg-white px-4 md:px-8 lg:px-10 py-5 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center border-b-0 lg:border-b-2 pb-2">
          <p className="text-3xl font-bold">LP-Kanalservice</p>
          <div className="hidden lg:flex flex-row gap-12">
            <div className="flex flex-row items-center justify-center gap-3">
              <PhoneCall className="w-[35px] h-[35px] text-tertiary" />
              <div>
                <p className="font-semibold text-[17px]">(215) - 555- 122</p>
                <p className="text-gray-700 text-[17px]">Jetzt anrufen</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-3">
              <MapPin className="w-[35px] h-[35px] text-tertiary" />
              <div>
                <p className="font-semibold text-[17px]">Bibererckerweg 4</p>
                <p className="text-gray-700 text-[17px]">94036 Passau</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-3">
              <Clock8 className="w-[35px] h-[35px] text-tertiary" />
              <div>
                <p className="font-semibold text-[17px]">24/7 Service</p>
                <p className="text-gray-700 text-[17px]">Rund um die Uhr</p>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-[24px]">LP - Kanalservice</SheetTitle>
                  <ul className="flex flex-col gap-3 text-[19px]">
                    <li className="mt-4">
                      <Link href="/">Startseite</Link>
                    </li>
                    <li>
                      <Link href="/">Über uns</Link>
                    </li>
                    <li>
                      <Link href="/">Leistungen</Link>
                    </li>
                    <li>
                      <Link href="/">Referenzen</Link>
                    </li>
                    <li>
                      <Link href="/">FAQ</Link>
                    </li>
                    <li className="mt-4">
                      <Link href="/">
                        <Button className="bg-secondary hover:bg-main hover:text-white text-black text-[17px]">Kontakt aufnehmen</Button>
                      </Link>
                    </li>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden text-[17px] lg:flex justify-between items-center py-4">
          <ul
            className="flex flex-row gap-8
          "
          >
            <li>
              <Link href="/">Startseite</Link>
            </li>
            <li>
              <Link href="/">Über uns</Link>
            </li>
            <li>
              <Link href="/">Leistungen</Link>
            </li>
            <li>
              <Link href="/">Referenzen</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
          <Button className="bg-secondary hover:bg-main hover:text-white text-black text-[17px]">
            Kontakt aufnehmen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
