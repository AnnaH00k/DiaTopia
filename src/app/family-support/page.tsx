'use client';

import { useLanguage } from "@/components/ClientLanguageProvider";
import Footer from "@/components/Footer";
import MenuHeader from "@/components/MenuHeader";
import { useState } from "react";

export default function FamilySupport() {
    const { language, toggleLanguage } = useLanguage();
    const isEnglish = language === "en";
    
  return (
    <div className="bg-gray-900 text-gray-50 min-h-screen font-sans">
     <MenuHeader />

      <main className="px-6 py-8 min-h-[85vh] max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-teal-600 mb-4">
            {isEnglish ? "Family Support" : "Familienunterstützung"}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish ? 
              "Diabetes can be challenging, not only for those who have the condition but also for their families. Support from family members is essential in managing the daily aspects of diabetes care. This includes helping with meal planning, exercise, emotional support, and understanding the disease."
              : 
              "Diabetes kann herausfordernd sein, nicht nur für diejenigen, die die Krankheit haben, sondern auch für ihre Familien. Die Unterstützung durch Familienmitglieder ist entscheidend für die Bewältigung der täglichen Aspekte der Diabetesversorgung. Dazu gehört die Unterstützung bei der Mahlzeitenplanung, Bewegung, emotionaler Unterstützung und das Verständnis der Krankheit."
            }
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            {isEnglish ? "Ways to Support a Family Member with Diabetes" : "Möglichkeiten, ein Familienmitglied mit Diabetes zu unterstützen"}
          </h3>
          <ul className="list-disc ml-6 mt-4">
            <li>{isEnglish ? "Offer emotional support and encourage your loved one" : "Bieten Sie emotionale Unterstützung und ermutigen Sie Ihren Angehörigen"}</li>
            <li>{isEnglish ? "Learn about diabetes to understand the condition better" : "Lernen Sie über Diabetes, um die Krankheit besser zu verstehen"}</li>
            <li>{isEnglish ? "Help with meal planning and cooking healthy meals" : "Helfen Sie bei der Mahlzeitenplanung und dem Kochen gesunder Mahlzeiten"}</li>
            <li>{isEnglish ? "Assist with monitoring blood sugar levels and administering insulin if needed" : "Helfen Sie bei der Überwachung des Blutzuckerspiegels und der Verabreichung von Insulin, wenn nötig"}</li>
            <li>{isEnglish ? "Encourage regular physical activity and join in exercises together" : "Ermutigen Sie zu regelmäßiger körperlicher Aktivität und machen Sie gemeinsam Sport"}</li>
            <li>{isEnglish ? "Be patient and understanding when managing symptoms or fluctuations in blood sugar" : "Seien Sie geduldig und verständnisvoll, wenn Symptome oder Schwankungen des Blutzuckerspiegels auftreten"}</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            {isEnglish ? "Additional Resources for Families" : "Zusätzliche Ressourcen für Familien"}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish ? 
              "There are various resources available for families to get more information and support for managing diabetes. These include websites, community groups, and counseling services."
              : 
              "Es gibt verschiedene Ressourcen, die Familien zur Verfügung stehen, um mehr Informationen und Unterstützung im Umgang mit Diabetes zu erhalten. Dazu gehören Websites, Gemeinschaftsgruppen und Beratungsdienste."
            }
          </p>
          <ul className="list-disc ml-6 mt-4">
  <li>
    <a 
      href="https://www.idf.org/" 
      className="text-teal-400 hover:underline" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {isEnglish ? "International Diabetes Federation (IDF) - A global resource for diabetes care and education." : "International Diabetes Federation (IDF) - Eine weltweite Ressource für Diabetesversorgung und -aufklärung."}
    </a>
  </li>
  <li>
    <a 
      href="https://www.diabetes.co.uk/" 
      className="text-teal-400 hover:underline" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {isEnglish ? "Diabetes.co.uk - Offers helpful resources for families in managing diabetes." : "Diabetes.co.uk - Bietet hilfreiche Ressourcen für Familien bei der Diabetesbewältigung."}
    </a>
  </li>
  <li>
    <a 
      href="https://www.jdrf.org/" 
      className="text-teal-400 hover:underline" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {isEnglish ? "JDRF - Supports Type 1 Diabetes research and offers global volunteering opportunities." : "JDRF - Unterstützt die Forschung zu Typ-1-Diabetes und bietet weltweite Freiwilligenmöglichkeiten."}
    </a>
  </li>
  <li>
    <a 
      href="https://www.who.int/news-room/fact-sheets/detail/diabetes" 
      className="text-teal-400 hover:underline" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {isEnglish ? "World Health Organization (WHO) - Provides health guidelines and reports on global diabetes management." : "Weltgesundheitsorganisation (WHO) - Bietet Gesundheitsrichtlinien und Berichte zur weltweiten Diabetesbewältigung."}
    </a>
  </li>
</ul>

        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            {isEnglish ? "Places to Get Involved and Make a Change" : "Möglichkeiten, sich zu engagieren und Veränderung zu bewirken"}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish ? 
              "There are many ways to get directly involved in improving diabetes care and supporting those affected by the condition. Whether it's through donations, volunteering, or advocating for policy change, your efforts can make a real difference."
              : 
              "Es gibt viele Möglichkeiten, sich direkt für eine Verbesserung der Diabetesversorgung und die Unterstützung der Betroffenen einzusetzen. Ob durch Spenden, ehrenamtliche Arbeit oder die Unterstützung von politischen Veränderungen – Ihre Bemühungen können einen echten Unterschied machen."
            }
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><a href="https://www.idf.org/" target="_blank"  className="text-teal-400 hover:underline">{isEnglish ? "Donate to the International Diabetes Federation (IDF)" : "Spenden Sie an die International Diabetes Federation (IDF)"}</a></li>
            <li><a href="https://www.jdrf.org/" target="_blank" className="text-teal-400 hover:underline">{isEnglish ? "Volunteer with JDRF (Juvenile Diabetes Research Foundation)" : "Freiwilligenarbeit bei JDRF (Juvenile Diabetes Research Foundation)"}</a></li>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/diabetes" target="_blank" className="text-teal-400 hover:underline">{isEnglish ? "Support WHO’s initiatives for global diabetes management" : "Unterstützen Sie die Initiativen der WHO für die globale Diabetesbewältigung"}</a></li>
            <li><a href="https://www.worlddiabetesday.org/" target="_blank" className="text-teal-400 hover:underline">{isEnglish ? "Support World Diabetes Day" : "Unterstützen Sie den Welt-Diabetestag"}</a></li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            {isEnglish ? "Apply Your Skills in the Pump Manufacturing Industry" : "Setzen Sie Ihre Fähigkeiten in der Pumpenindustrie ein"}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish ? 
              "The pump manufacturing industry, especially for medical devices like insulin pumps, offers a variety of career opportunities for those with technical expertise. From engineers to product designers, there are many ways to contribute to the development of innovative diabetes management solutions."
              : 
              "Die Pumpenindustrie, insbesondere für medizinische Geräte wie Insulinpumpen, bietet zahlreiche Karrieremöglichkeiten für Fachleute mit technischer Expertise. Vom Ingenieur bis zum Produktdesigner gibt es viele Möglichkeiten, zur Entwicklung innovativer Diabetesmanagement-Lösungen beizutragen."
            }
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>{isEnglish ? "Electrical Engineers - Design and develop the hardware for insulin pumps." : "Elektronikingenieure - Entwerfen und entwickeln die Hardware für Insulinpumpen."}</li>
            <li>{isEnglish ? "Software Developers - Work on the software and user interfaces for insulin pumps." : "Softwareentwickler - Arbeiten an der Software und den Benutzeroberflächen für Insulinpumpen."}</li>
            <li>{isEnglish ? "Biomedical Engineers - Ensure that insulin pumps are safe and effective for medical use." : "Biomedizinische Ingenieure - Sorgen dafür, dass Insulinpumpen sicher und effektiv für den medizinischen Gebrauch sind."}</li>
            <li>{isEnglish ? "Product Designers - Create user-friendly designs for patients and caregivers." : "Produktdesigner - Erstellen benutzerfreundlicher Designs für Patienten und Pflegekräfte."}</li>
            <li>{isEnglish ? "Apply directly to leading pump manufacturers like Medtronic, Roche, and Abbott for opportunities." : "Bewerben Sie sich direkt bei führenden Pumpenherstellern wie Medtronic, Roche und Abbott für Möglichkeiten."}</li>
          </ul>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish ? "You can check global job boards or company websites for roles in diabetes care and pump manufacturing." : "Sie können globale Jobbörsen oder Unternehmenswebsites nach Stellenangeboten im Bereich Diabetesversorgung und Pumpenherstellung durchsuchen."}
          </p>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
