'use client';

import { useLanguage } from "@/components/ClientLanguageProvider";
import Footer from "@/components/Footer";
import MenuHeader from "@/components/MenuHeader";
import { useState } from "react";

export default function TechInnovation() {
    const { language, toggleLanguage } = useLanguage();
    const isEnglish = language === "en";
    

  return (
    <div className="bg-gray-900 text-gray-50 min-h-screen font-sans">
     <MenuHeader />

      <main className="px-6 py-8 min-h-[85vh] max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-teal-600 mb-4">
            {isEnglish ? "Tech Innovations in Diabetes Management" : "Technologische Innovationen im Diabetesmanagement"}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish
              ? "Discover the latest innovations and open-source projects revolutionizing diabetes care. From closed-loop systems to mobile apps, these advancements are making it easier to manage diabetes and improving quality of life."
              : "Entdecken Sie die neuesten Innovationen und Open-Source-Projekte, die die Diabetesversorgung revolutionieren. Von Closed-Loop-Systemen bis hin zu mobilen Apps erleichtern diese Fortschritte das Diabetesmanagement und verbessern die Lebensqualität."}
          </p>
        </section>

        {/* Innovation Sections */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Closed-Loop Systems */}
          <div className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Closed-Loop Systems" : "Closed-Loop-Systeme"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Closed-loop systems, also known as automated insulin delivery (AID) systems, use continuous glucose monitoring (CGM) to adjust insulin delivery in real-time. This creates a dynamic system that mimics the function of a healthy pancreas. Popular systems include Medtronic’s MiniMed™ 670G and the Tandem Diabetes Control-IQ™ system."
                : "Closed-Loop-Systeme, auch als automatisierte Insulinabgabesysteme (AID-Systeme) bekannt, nutzen kontinuierliche Glukosemessung (CGM), um die Insulinabgabe in Echtzeit anzupassen. Dies schafft ein dynamisches System, das die Funktion einer gesunden Bauchspeicheldrüse nachahmt. Zu den beliebten Systemen gehören Medtronics MiniMed™ 670G und das Tandem Diabetes Control-IQ™-System."}
            </p>
            <a href="https://www.medtronicdiabetes.com/" target="_blank" className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Learn More" : "Mehr erfahren"}
            </a>
          </div>

          {/* Open Source Artificial Pancreas Systems */}
          <div className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Open-Source Artificial Pancreas Systems" : "Open-Source Künstliche Bauchspeicheldrüsensysteme"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "The open-source artificial pancreas project (OpenAPS) is a community-driven initiative that empowers users to build their own closed-loop insulin delivery systems. This project is helping people around the world create custom solutions for diabetes management, giving them more control and flexibility."
                : "Das Open-Source-Projekt zur künstlichen Bauchspeicheldrüse (OpenAPS) ist eine gemeinschaftlich getragene Initiative, die es Benutzern ermöglicht, ihre eigenen Closed-Loop-Insulinabgabesysteme zu bauen. Dieses Projekt hilft Menschen weltweit, maßgeschneiderte Lösungen für das Diabetesmanagement zu schaffen und ihnen mehr Kontrolle und Flexibilität zu geben."}
            </p>
            <a href="https://openaps.org/" target="_blank" className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Visit OpenAPS" : "Besuchen Sie OpenAPS"}
            </a>
          </div>

          {/* Mobile Apps for Diabetes Management */}
          <div className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Mobile Apps for Diabetes Management" : "Mobile Apps für das Diabetesmanagement"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Mobile applications are transforming diabetes care by offering users tools for monitoring glucose levels, insulin doses, and diet. Apps like MySugr, Glucose Buddy, and BlueLoop are designed to simplify tracking and improve the communication between patients and healthcare providers."
                : "Mobile Anwendungen revolutionieren die Diabetesversorgung, indem sie den Benutzern Werkzeuge zur Überwachung des Blutzuckerspiegels, der Insulindosen und der Ernährung bieten. Apps wie MySugr, Glucose Buddy und BlueLoop wurden entwickelt, um das Tracking zu vereinfachen und die Kommunikation zwischen Patienten und Gesundheitsdienstleistern zu verbessern."}
            </p>
            <a href="https://www.mysugr.com/" target="_blank" className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Learn About MySugr" : "Erfahren Sie mehr über MySugr"}
            </a>
          </div>

          {/* Smart Insulin Pens */}
          <div className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Smart Insulin Pens" : "Smart Insulin Pens"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Smart insulin pens are transforming the way people manage insulin injections. These pens track insulin usage, remind users when to inject, and sync data to mobile apps. Companies like Novo Nordisk and Sanofi are developing smart pens that integrate with CGMs and health apps."
                : "Smart Insulin Pens verändern die Art und Weise, wie Menschen Insulininjektionen verwalten. Diese Stifte verfolgen den Insulineinsatz, erinnern die Benutzer an die Injektion und synchronisieren Daten mit mobilen Apps. Unternehmen wie Novo Nordisk und Sanofi entwickeln Smart Pens, die mit CGMs und Gesundheits-Apps integriert sind."}
            </p>
            <a href="https://www.novonordisk.com/" target="_blank" className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Visit Novo Nordisk" : "Besuchen Sie Novo Nordisk"}
            </a>
          </div>

          {/* Continuous Glucose Monitoring (CGM) Systems */}
          <div className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Continuous Glucose Monitoring (CGM) Systems" : "Kontinuierliche Glukosemesssysteme (CGM)"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Continuous Glucose Monitoring systems offer real-time tracking of glucose levels, helping individuals manage their diabetes more effectively. Devices like the Dexcom G6 and Abbott’s FreeStyle Libre provide data to both users and their healthcare providers."
                : "Kontinuierliche Glukosemesssysteme bieten eine Echtzeitüberwachung des Blutzuckerspiegels und helfen Einzelpersonen, ihren Diabetes effektiver zu verwalten. Geräte wie der Dexcom G6 und Abbott’s FreeStyle Libre liefern Daten sowohl für die Benutzer als auch für ihre Gesundheitsdienstleister."}
            </p>
            <a href="https://www.dexcom.com/" target="_blank" className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Learn More about Dexcom" : "Mehr über Dexcom erfahren"}
            </a>
          </div>

          {/* Wearable Diabetes Management Devices */}
          <div className="bg-gray-800 hover:shadow-gray-400 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {isEnglish ? "Wearable Diabetes Management Devices" : "Tragbare Diabetes-Management-Geräte"}
            </h3>
            <p className="text-lg mb-4">
              {isEnglish
                ? "Wearable diabetes management devices combine continuous glucose monitoring (CGM) and insulin delivery systems in a single wearable platform. These devices are designed to simplify diabetes management by enabling real-time insulin adjustments and glucose tracking. Examples include the Omnipod 5 and the Eversense CGM system."
                : "Tragbare Diabetes-Management-Geräte kombinieren kontinuierliche Glukosemessung (CGM) und Insulinabgabesysteme in einer einzigen tragbaren Plattform. Diese Geräte wurden entwickelt, um das Diabetesmanagement zu vereinfachen, indem sie Echtzeit-Insulinanpassungen und Blutzuckerüberwachung ermöglichen. Beispiele sind das Omnipod 5 und das Eversense CGM-System."}
            </p>
            <a href="https://www.omnipod.com/" target="_blank" className="text-teal-500 hover:text-teal-400">
              {isEnglish ? "Learn About Omnipod 5" : "Erfahren Sie mehr über Omnipod 5"}
            </a>
          </div>

        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
