import { FC } from "react";
import { useLanguage } from "@/components/ClientLanguageProvider";

const MenuHeader: FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === "en";

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
      <a href="/" className="text-3xl font-bold">DiaTopia</a>
      <nav className="space-x-4 hidden sm:block">
        <a href="./diabetes-info" className="hover:text-teal-400 p-2 border-b bg-slate-800 border-gray-400 rounded-lg transition-colors">
          {isEnglish ? "Diabetes explained" : "Diabetes erklärt"}
        </a>
        <a href="./pump-manufacturers" className="hover:text-teal-400  p-2 border-b bg-slate-800 border-gray-400 rounded-lg transition-colors">
          {isEnglish ? "Pump Manufacturers" : "Pumpenhersteller"}
        </a>
        <a href="./tech-innovation" className="hover:text-teal-400  p-2 border-b bg-slate-800 border-gray-400 rounded-lg transition-colors">
          {isEnglish ? "Innovations" : "Innovationen"}
        </a>
        <a href="./family-support" className="hover:text-teal-400  p-2 border-b bg-slate-800 border-gray-400 rounded-lg transition-colors">
          {isEnglish ? "Family Support" : "Angehörigenunterstützung"}
        </a>
      </nav>
      <button
        onClick={toggleLanguage}
        className="focus:outline-none"
      >
        <img
          src={isEnglish ? "/flags/gb-flag.webp" : "/flags/de-flag.webp"}
          alt={isEnglish ? "German Flag" : "English Flag"}
          className="w-auto h-8 p-1 border border-gray-400 bg-slate-800 rounded-lg shadow-slate-400"
        />
      </button>
    </header>
  );
};

export default MenuHeader;
