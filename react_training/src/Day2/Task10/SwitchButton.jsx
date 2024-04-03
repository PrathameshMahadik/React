import React from "react";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import Data1 from "./eng.json";
import Data2 from "./span.json";

const SwitchButton = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const data = (language === "english")? Data1:Data2;
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
      {data.map((value)=>{
        return (
            <>
            <h1>{value.welcome_messege}</h1>
            <h2>{value.lang}</h2>
            </>
        )
      })}
    </>
  );
};
export default SwitchButton;
