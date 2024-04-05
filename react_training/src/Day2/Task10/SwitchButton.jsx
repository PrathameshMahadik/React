import React from "react";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import { english, spanish } from "./eng";

const SwitchButton = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const data = Object.values((language === "english")? english:spanish);
  return (
    <>
      <button
        onClick={() =>
          language === "english"
            ? setLanguage("spanish")
            : setLanguage("english")
        }
      >
        {language}
      </button>
      <h1>{data[0]}</h1>
      <h2>{data[1]}</h2>
    </>
  );
};
export default SwitchButton;
