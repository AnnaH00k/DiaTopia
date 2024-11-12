// components/Footer.tsx

import { FC } from "react";

interface FooterProps {
  language: string;
}

const Footer: FC<FooterProps> = ({ language }) => {
  const isEnglish = language === "en";

  return (
    <footer className="mt-12 py-6 bg-gray-800 text-center">
      <p>
        {isEnglish
          ? "© 2024 DiaTopia. All rights reserved."
          : "© 2024 DiaTopia. Alle Rechte vorbehalten."}
      </p>
    </footer>
  );
};

export default Footer;
