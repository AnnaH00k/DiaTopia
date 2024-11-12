'use client';

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const isEnglish = language === "en";

  const toggleLanguage = () => {
    setLanguage(isEnglish ? "de" : "en");
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold">DiaTopia</h1>
        <button
          onClick={toggleLanguage}
          className="bg-teal-500 text-gray-900 px-3 py-1 rounded-md focus:outline-none hover:bg-teal-400 transition-colors"
        >
          {isEnglish ? "Deutsch" : "English"}
        </button>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Intro Section */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {isEnglish
              ? "Improving Diabetes Care Together"
              : "Nur gemeinsam können wir die Diabetesversorgung verbessern"}
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            {isEnglish
              ? "Together, we can drive product improvements. Major companies and pump manufacturers should establish simpler feedback loops, or we can create our products collaboratively with open-source engagement."
              : "Nur gemeinsam können wir dafür sorgen, dass Produkte verbessert werden. Große Firmen und Pumpenhersteller sollten einfachere Feedback-Loops haben, oder wir erstellen unsere Produkte selbst mit offenem, gemeinschaftlichem Engagement."}
          </p>
        </section>

        {/* Informational Sections */}
        <section className="space-y-8">
          {/* What is Diabetes? */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "What is Diabetes?" : "Was ist Diabetes?"}
            </h3>
            <p>
              {isEnglish
                ? "Diabetes is a chronic condition that affects how the body processes blood sugar. Proper care and lifestyle adjustments can help people manage this condition effectively."
                : "Diabetes ist eine chronische Krankheit, die beeinflusst, wie der Körper Blutzucker verarbeitet. Eine gute Versorgung und Anpassungen des Lebensstils können Menschen helfen, diese Krankheit effektiv zu bewältigen."}
            </p>
          </div>

          {/* Major Pump Manufacturers */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Who are the Major Pump Manufacturers?" : "Wer sind die großen Pumpenhersteller?"}
            </h3>
            <p>
              {isEnglish
                ? "Leading pump manufacturers include Medtronic, Insulet, and Tandem, offering advanced insulin pumps to support diabetes management."
                : "Zu den führenden Pumpenherstellern gehören Medtronic, Insulet und Tandem, die fortschrittliche Insulinpumpen zur Unterstützung des Diabetes-Managements anbieten."}
            </p>
          </div>

          {/* What are Loops? */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "What are Loops?" : "Was sind Loops?"}
            </h3>
            <p>
              {isEnglish
                ? "Loops are closed-loop systems that help automate insulin delivery based on real-time glucose readings, creating a more stable management process."
                : "Loops sind Closed-Loop-Systeme, die helfen, die Insulinabgabe basierend auf Echtzeit-Glukosewerten zu automatisieren und somit eine stabilere Steuerung ermöglichen."}
            </p>
          </div>

          {/* Long, Healthy Life with Diabetes */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish
                ? "Living a Long, Healthy Life with Diabetes"
                : "So können Menschen mit Diabetes ein langes und gesundes Leben führen"}
            </h3>
            <p>
              {isEnglish
                ? "With the right support and medical care, people with various types of diabetes can live long, fulfilling lives. Staying informed and adapting treatment to individual needs is key."
                : "Mit der richtigen Unterstützung und medizinischen Versorgung können Menschen mit verschiedenen Diabetes-Typen ein langes, erfülltes Leben führen. Gut informiert zu sein und die Behandlung individuell anzupassen, ist entscheidend."}
            </p>
          </div>

          {/* Support for Family Members */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Support for Family Members" : "Unterstützung für Angehörige"}
            </h3>
            <p>
              {isEnglish
                ? "Family members play a vital role in supporting their loved ones with diabetes by staying informed, offering emotional support, and helping with daily management."
                : "Angehörige spielen eine wichtige Rolle bei der Unterstützung ihrer Lieben mit Diabetes, indem sie informiert bleiben, emotionale Unterstützung bieten und bei der täglichen Bewältigung helfen."}
            </p>
          </div>

          {/* Role of Programmers and Apps */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "How Programmers and Apps Can Help" : "Wie Programmierer und Apps helfen können"}
            </h3>
            <p>
              {isEnglish
                ? "Developers and tech innovators are making diabetes care more manageable with apps, automated data tracking, and open-source tools. With the support of the diabetes community, apps can be tailored to individual needs, improve insulin management, and enable real-time feedback."
                : "Entwickler und technische Innovatoren machen die Diabetesversorgung durch Apps, automatisierte Datenverfolgung und Open-Source-Tools einfacher. Mit Unterstützung der Diabetes-Community können Apps individuell angepasst werden, das Insulinmanagement verbessern und Echtzeit-Feedback ermöglichen."}
            </p>
            <p>
              {isEnglish
                ? "Open-source projects allow for collaborative innovation, enabling users, caregivers, and developers to create tools that address real needs in diabetes management. Together, we can bring better solutions to the diabetes community."
                : "Open-Source-Projekte ermöglichen eine kollaborative Innovation, bei der Benutzer, Angehörige und Entwickler gemeinsam Werkzeuge entwickeln, die echte Bedürfnisse im Diabetes-Management abdecken. Gemeinsam können wir bessere Lösungen für die Diabetes-Community schaffen."}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 bg-gray-800 text-center">
        <p>
          {isEnglish
            ? "© 2024 DiaTopia. All rights reserved."
            : "© 2024 DiaTopia. Alle Rechte vorbehalten."}
        </p>
      </footer>
    </div>
  );
}
