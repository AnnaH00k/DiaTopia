'use client';

import { useLanguage } from "@/components/ClientLanguageProvider";
import Footer from "@/components/Footer";
import MenuHeader from "@/components/MenuHeader";
import { useState } from "react";

export default function PumpManufacturers() {
    const { language, toggleLanguage } = useLanguage();
    const isEnglish = language === "en";

  return (
    <div className="bg-gray-900 text-gray-50 min-h-screen font-sans">
     <MenuHeader />

      <main className="px-6 py-8 min-h-[85vh] max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-teal-600 mb-4">
            {isEnglish ? "Leading Insulin Pump Manufacturers" : "Führende Insulinpumpen-Hersteller"}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish
              ? "Insulin pumps are vital tools in diabetes management, providing continuous insulin delivery to help maintain stable glucose levels. Below are some of the leading insulin pump manufacturers that are innovating in this field."
              : "Insulinpumpen sind wichtige Hilfsmittel im Diabetesmanagement und ermöglichen eine kontinuierliche Insulinabgabe zur Stabilisierung des Blutzuckerspiegels. Hier sind einige der führenden Hersteller von Insulinpumpen, die in diesem Bereich Innovationen vorantreiben."}
          </p>
        </section>

        {/* Manufacturer Details */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Medtronic */}
          <a href="https://www.medtronicdiabetes.com/" target="_blank" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Medtronic" : "Medtronic"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Medtronic is a leading manufacturer of insulin pumps and diabetes management technologies. They offer a variety of pumps with advanced features, including the MiniMed™ 670G system, the first FDA-approved hybrid closed-loop insulin system."
                : "Medtronic ist ein führender Hersteller von Insulinpumpen und Technologien für das Diabetesmanagement. Sie bieten eine Vielzahl von Pumpen mit fortschrittlichen Funktionen, einschließlich des MiniMed™ 670G-Systems, dem ersten FDA-zugelassenen Hybrid-Closed-Loop-Insulin-System."}
            </p>
            <div className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Visit Medtronic" : "Medtronic besuchen"}
            </div>
          </a>

          {/* Insulet */}
          <a href="https://www.insulet.com/" target="_blank" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Insulet" : "Insulet"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Insulet is the maker of the Omnipod® insulin management system. Their tubeless insulin pumps offer an innovative, discreet way to deliver insulin without the need for tubes or infusion sets."
                : "Insulet ist der Hersteller des Omnipod®-Systems zur Insulinsteuerung. Ihre tubulosen Insulinpumpen bieten eine innovative und diskrete Möglichkeit, Insulin abzugeben, ohne dass Schläuche oder Infusionssets erforderlich sind."}
            </p>
            <div className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Visit Insulet" : "Insulet besuchen"}
            </div>
          </a>

          {/* Tandem Diabetes */}
          <a href="https://www.tandemdiabetes.com/" target="_blank" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Tandem Diabetes" : "Tandem Diabetes"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Tandem Diabetes is known for its t:slim X2 insulin pump, a sleek and user-friendly device that integrates with Continuous Glucose Monitors (CGMs) and allows for automated insulin delivery."
                : "Tandem Diabetes ist bekannt für seine t:slim X2 Insulinpumpe, ein schlankes und benutzerfreundliches Gerät, das mit kontinuierlichen Glukosemonitoren (CGMs) integriert ist und eine automatisierte Insulinabgabe ermöglicht."}
            </p>
            <div className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Visit Tandem Diabetes" : "Tandem Diabetes besuchen"}
            </div>
          </a>

          {/* Roche (Accu-Chek) */}
          <a href="https://www.accu-chek.com/" target="_blank" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Roche (Accu-Chek)" : "Roche (Accu-Chek)"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Roche, through its Accu-Chek brand, provides insulin pumps and diabetes management products that are designed to make diabetes care easier and more efficient."
                : "Roche bietet über seine Marke Accu-Chek Insulinpumpen und Produkte zur Diabetesversorgung an, die darauf ausgelegt sind, die Diabetesbehandlung zu vereinfachen und effizienter zu gestalten."}
            </p>
            <div className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Visit Roche (Accu-Chek)" : "Roche (Accu-Chek) besuchen"}
            </div>
          </a>

          {/* Animas (now part of Medtronic) */}
          <a href="https://www.medtronicdiabetes.com/" target="_blank" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Animas (Now Part of Medtronic)" : "Animas (Jetzt Teil von Medtronic)"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Animas, now a part of Medtronic, was known for its durable insulin pumps. Although Animas pumps are no longer sold, Medtronic continues to offer advanced insulin delivery systems with the same reliability."
                : "Animas, jetzt Teil von Medtronic, war bekannt für seine robusten Insulinpumpen. Obwohl Animas-Pumpen nicht mehr verkauft werden, bietet Medtronic weiterhin fortschrittliche Insulinabgabesysteme mit derselben Zuverlässigkeit an."}
            </p>
            <div className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Visit Medtronic" : "Medtronic besuchen"}
            </div>
          </a>

        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
