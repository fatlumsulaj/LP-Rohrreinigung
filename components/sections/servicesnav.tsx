import React from "react";
import { Siren, Shell, Zap, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type ServiceCardProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="max-w-[350px] py-12 px-[10px] mx-auto">
      <Icon className="text-tertiary w-[70px] h-[70px] bg-white rounded-md p-3" />
      <p className="text-2xl font-semibold my-5">{title}</p>
      <p>{description}</p>
      <a href="tel:+" className="inline-block mt-3 lg:mt-4">
        <Button variant="tertiary">
          Jetzt anrufen
          <ArrowRight className="size-5" />
        </Button>
      </a>
    </div>
  );
};

export default function ServicesNav() {
  const services: ServiceCardProps[] = [
    {
      Icon: Siren,
      title: "Notdienst & Akute Rohrverstopfungen",
      description:
        "Schnelle und zuverlässige Hilfe bei verstopften Abflüssen, WC-Verstopfungen und anderen Notfällen – wir sind 24/7 für Sie im Einsatz, um Ihnen in jeder Situation rasch und effektiv zur Seite zu stehen!",
    },
    {
      Icon: Shell,
      title: "Rohrreinigung & Kanalreinigung",
      description:
        "Gründliche Reinigung und professionelle Wartung Ihrer Rohre und Kanäle mit modernster Technik – für einen zuverlässigen Schutz vor Verstopfungen und hartnäckigen Ablagerungen!",
    },
    {
      Icon: Zap,
      title: "Warum Sie uns wählen sollten?",
      description:
        "Experten für Rohrreinigung in Passau bieten schnellen, sauberen und zuverlässigen Service. Mit modernster Technik beseitigen wir Verstopfungen gründlich und schützen Ihre Rohre nachhaltig!",
    },
  ];

  return (
    <section className="md:px-8 lg:px-10 relative lg:pb-20 mt-2 lg:mt-[-180px]">
      <div className="max-w-7xl mx-auto bg-[#f0f3fa] rounded-md">
        <div className="flex w-full flex-col lg:flex-row justify-around items-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
