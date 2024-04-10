import { createContext, useState } from "react";

const LanguageContext = createContext();

export const UserLanguage = ({ children }) => {
  const [language, setLanguage] = useState("english");
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
export default LanguageContext;
