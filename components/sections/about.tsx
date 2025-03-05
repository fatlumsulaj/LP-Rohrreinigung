import React from "react";

export default function About() {
  return (
    <section className="bg-white mt-10 mb-10 md:mb-28 px-4 md:px-8 lg:px-10 py-5 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row gap-5 md:gap-10 lg:gap-20 flex-wrap">
          <img
            src="https://ik.imagekit.io/inowebagentur/LP%20Rohrreinigung/rohrreinigung%20about.jpg?updatedAt=1740611011026"
            alt="Rohrverstopfung Passau"
            loading="eager"
            className="w-full md:max-w-[600px] rounded-md"
          />
          <div className="max-w-[500px] px-2">
            <p className="bg-[#f0f3fa] w-fit px-3 py-1 text-tertiary font-medium">
              ÜBER UNS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-5">
              Ihr Experte für{" "}
              <span className="text-tertiary">Rohrreinigung in Passau</span> –
              Schnell, Sauber, Zuverlässig!
            </h2>
            <p>
              Als Ihr zuverlässiger Partner für Rohrreinigung in Passau stehen
              wir für schnellen, sauberen und professionellen Service. Dank
              unserer langjährigen Erfahrung und unserem regionalen Einsatz sind
              wir jederzeit für Sie da – zuverlässig, transparent und mit
              höchsten Qualitätsstandards. Ob verstopfte Abflüsse,
              WC-Verstopfungen oder die regelmäßige Reinigung Ihrer Rohrsysteme
              – wir sorgen dafür, dass alles wieder reibungslos funktioniert.
              Vertrauen Sie auf unsere Expertise und lassen Sie uns Ihr Problem
              schnell und effizient lösen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
