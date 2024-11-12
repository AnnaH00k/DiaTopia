'use client';

import { useLanguage } from "@/components/ClientLanguageProvider";
import Footer from "@/components/Footer";
import MenuHeader from "@/components/MenuHeader";

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === "en";
  

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
     <MenuHeader />

      {/* Main Content */}
      <main className="px-6 min-h-[85vh] py-8 flex flex-col items-center justify-center">
        {/* Intro Section */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {isEnglish
              ? "Improving Diabetes Care Together"
              : "Gemeinsam die Diabetesversorgung verbessern"}
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            {isEnglish
              ? "Through collaboration and innovation, DiaTopia aims to simplify diabetes management, offering a comprehensive hub for those affected by diabetes and their families."
              : "DiaTopia vereinfacht das Diabetesmanagement durch Zusammenarbeit und Innovation und bietet eine umfassende Anlaufstelle für Betroffene und ihre Familien."}
          </p>
        </section>

        {/* Informational Sections */}
        <section className="gap-4 grid sm:grid-cols-2 max-w-3xl">
          <a href="/diabetes-info" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "What is Diabetes?" : "Was ist Diabetes?"}
            </h3>
            <p>
              {isEnglish
                ? "Diabetes is a chronic condition affecting glucose regulation. Type 1 and Type 2 diabetes have distinct causes but share similar challenges. Proper care and management are key to living a fulfilling life."
                : "Diabetes ist eine chronische Erkrankung, die die Blutzuckerregulierung beeinflusst. Typ-1- und Typ-2-Diabetes haben unterschiedliche Ursachen, stellen aber ähnliche Herausforderungen dar. Eine gute Betreuung und das richtige Management sind entscheidend für ein erfülltes Leben."}
            </p>
          </a>

          <a href="/pump-manufacturers" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Leading Insulin Pump Manufacturers" : "Führende Pumpenhersteller"}
            </h3>
            <p>
              {isEnglish
                ? "Companies like Medtronic, Insulet, and Tandem develop advanced insulin pumps, which help users manage their insulin levels more effectively. These companies also offer a range of features to improve usability and care."
                : "Unternehmen wie Medtronic, Insulet und Tandem entwickeln fortschrittliche Insulinpumpen, die Benutzern helfen, ihren Insulinspiegel effektiver zu steuern. Diese Firmen bieten auch Funktionen zur Verbesserung der Benutzerfreundlichkeit und Versorgung an."}
            </p>
          </a>

          <a href="/tech-innovation" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Innovations in Automated Insulin Management" : "Innovationen im automatisierten Insulinmanagement"}
            </h3>
            <p>
              {isEnglish
                ? "Closed-loop systems, or Loops, automate insulin delivery based on real-time glucose levels, offering a more seamless experience. These technologies, integrated with apps, enhance safety and quality of life."
                : "Closed-Loop-Systeme oder Loops automatisieren die Insulinabgabe basierend auf Echtzeit-Glukosewerten und bieten ein nahtloses Benutzererlebnis. Diese Technologien, die in Apps integriert sind, verbessern die Sicherheit und Lebensqualität."}
            </p>
          </a>

          <a href="/family-support" className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Support for Family Members" : "Unterstützung für Angehörige"}
            </h3>
            <p>
              {isEnglish
                ? "Families play a crucial role in diabetes care. By understanding the condition and offering emotional and practical support, family members can make a significant positive impact."
                : "Familien spielen eine wichtige Rolle in der Diabetesversorgung. Durch Verständnis für die Erkrankung und emotionale sowie praktische Unterstützung können Angehörige einen großen positiven Beitrag leisten."}
            </p>
          </a>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
