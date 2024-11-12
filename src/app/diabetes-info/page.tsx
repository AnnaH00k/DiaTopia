'use client';

import Footer from "@/components/Footer";
import MenuHeader from "@/components/MenuHeader";
import { useState } from "react";
import { useLanguage } from "@/components/ClientLanguageProvider";


export default function DiabetesInfo() {
    const { language, toggleLanguage } = useLanguage();
    const isEnglish = language === "en";
    
  return (
    <div className="bg-gray-900 text-gray-50 min-h-screen font-sans">
     <MenuHeader />

      <main className="px-6 py-8 min-h-[85vh] max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-teal-600 mb-4">
            {isEnglish ? "Diabetes Explained" : "Diabetes Erklärt"}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish ? 
              "Diabetes is a condition that affects how your body processes blood sugar (glucose). Normally, when you eat, your body breaks down food into glucose, which is then used by your cells for energy. Insulin, a hormone produced by the pancreas, helps move glucose from the bloodstream into cells. In people with diabetes, either the body doesn't produce enough insulin, or the insulin it produces isn't effective, leading to high levels of glucose in the blood."
              : 
              "Diabetes ist eine Erkrankung, die die Art und Weise beeinflusst, wie Ihr Körper Blutzucker (Glukose) verarbeitet. Normalerweise, wenn Sie essen, baut Ihr Körper das Essen in Glukose um, die dann von Ihren Zellen als Energie verwendet wird. Insulin, ein vom Pankreas produziertes Hormon, hilft dabei, die Glukose aus dem Blutkreislauf in die Zellen zu transportieren. Bei Menschen mit Diabetes produziert der Körper entweder nicht genug Insulin oder das Insulin, das er produziert, ist nicht wirksam, was zu hohen Blutzuckerspiegeln führt."
            }
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            {isEnglish ? "Types of Diabetes" : "Arten von Diabetes"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                {isEnglish ? "Type 1 Diabetes" : "Typ-1-Diabetes"}
              </h4>
              <p>
                {isEnglish ? 
                  "This is an autoimmune condition where the body's immune system attacks the insulin-producing cells in the pancreas. It is typically diagnosed in children and young adults."
                  : 
                  "Dies ist eine Autoimmunerkrankung, bei der das Immunsystem des Körpers die Insulin-produzierenden Zellen in der Bauchspeicheldrüse angreift. Es wird normalerweise bei Kindern und jungen Erwachsenen diagnostiziert."
                }
              </p>
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                {isEnglish ? "Type 2 Diabetes" : "Typ-2-Diabetes"}
              </h4>
              <p>
                {isEnglish ? 
                  "In type 2 diabetes, the body either becomes resistant to insulin or doesn't produce enough insulin. This type is more common in adults and is linked to lifestyle factors like being overweight or inactive."
                  : 
                  "Beim Typ-2-Diabetes wird der Körper entweder resistent gegen Insulin oder produziert nicht genug Insulin. Diese Art tritt häufiger bei Erwachsenen auf und ist mit Lebensstilfaktoren wie Übergewicht oder Bewegungsmangel verbunden."
                }
              </p>
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                {isEnglish ? "Gestational Diabetes" : "Schwangerschaftsdiabetes"}
              </h4>
              <p>
                {isEnglish ? 
                  "This type occurs during pregnancy and usually goes away after childbirth. However, it can increase the risk of developing type 2 diabetes later in life."
                  : 
                  "Dieser Typ tritt während der Schwangerschaft auf und verschwindet in der Regel nach der Geburt. Er kann jedoch das Risiko erhöhen, später im Leben an Typ-2-Diabetes zu erkranken."
                }
              </p>
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                {isEnglish ? "Monogenic Diabetes" : "Monogener Diabetes"}
              </h4>
              <p>
                {isEnglish ? 
                  "A rare form of diabetes caused by a change in a single gene. This type is inherited and can occur at any age."
                  : 
                  "Eine seltene Form von Diabetes, die durch eine Veränderung eines einzelnen Gens verursacht wird. Diese Art ist erblich und kann in jedem Alter auftreten."
                }
              </p>
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                {isEnglish ? "MODY (Maturity Onset Diabetes of the Young)" : "MODY (Diabetes im jungen Erwachsenenalter)"}
              </h4>
              <p>
                {isEnglish ? 
                  "This is a genetic form of diabetes that affects young people and is caused by mutations in a single gene. It is often misdiagnosed as type 1 or type 2 diabetes."
                  : 
                  "Dies ist eine genetische Form von Diabetes, die junge Menschen betrifft und durch Mutationen in einem einzelnen Gen verursacht wird. Sie wird oft fälschlicherweise als Typ-1- oder Typ-2-Diabetes diagnostiziert."
                }
              </p>
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                {isEnglish ? "LADA (Latent Autoimmune Diabetes in Adults)" : "LADA (Latenter Autoimmun-Diabetes im Erwachsenenalter)"}
              </h4>
              <p>
                {isEnglish ? 
                  "This is a form of type 1 diabetes that develops slowly in adults and is often misdiagnosed as type 2 diabetes."
                  : 
                  "Dies ist eine Form von Typ-1-Diabetes, die sich langsam im Erwachsenenalter entwickelt und oft fälschlicherweise als Typ-2-Diabetes diagnostiziert wird."
                }
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            {isEnglish ? "Managing Diabetes" : "Diabetes-Management"}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {isEnglish ? 
              "Proper management of diabetes is essential to avoid complications. This can include:" 
              : 
              "Ein richtiges Management von Diabetes ist entscheidend, um Komplikationen zu vermeiden. Dies kann Folgendes umfassen:"
            }
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>{isEnglish ? "Regular monitoring of blood sugar levels" : "Regelmäßige Überwachung des Blutzuckerspiegels"}</li>
            <li>{isEnglish ? "Following a healthy diet" : "Eine gesunde Ernährung befolgen"}</li>
            <li>{isEnglish ? "Exercising regularly" : "Regelmäßige Bewegung"}</li>
            <li>{isEnglish ? "Taking prescribed medications or insulin injections" : "Eingenommene verschriebene Medikamente oder Insulinspritzen"}</li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            {isEnglish ? 
              "With the right care, people with diabetes can live a healthy and active life."
              : 
              "Mit der richtigen Pflege können Menschen mit Diabetes ein gesundes und aktives Leben führen."
            }
          </p>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
