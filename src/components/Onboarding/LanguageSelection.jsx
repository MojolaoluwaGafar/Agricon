import React, { useState } from "react";

const LanguageSelection = ({ onSelect, }) => {
  const languages = [
    { name: "English", initial: "E" },
    { name: "Hindi", initial: "H" },
    { name: "Bengali", initial: "B" },
    { name: "Maithili", initial: "M" },
    { name: "Gujarati", initial: "G" },
    { name: "Kannada", initial: "K" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);


  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    onSelect(language.name);
  };

  return (
    <div className="languageselectionscreen h-100">
      <div className="card flex rounded-4 m-auto w-90 ">
        <p className="text-sm font-semibold text-center my-4 lang">
          <span className="text-3xl font-thin">S</span>ELECT
          <span className="text-3xl font-thin"> L</span>ANGUAGE
        </p>
        <div className="px-3">
          {languages.map((language) => (
            <div className="">
              <div>
                <p
                  key={language.name}
                  className={`flex items-center justify-between p-2 h-15 cursor-pointer`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  <div className="flex items-center justify-center gap-4 ">
                    <div className="rounded-full initialbg w-15 h-15 flex items-center justify-center text-white text-4xl">
                      <span className="font-bold text-4xl">
                        {language.initial}
                      </span>
                    </div>
                    <div className="flex flex-col items-center ms-2 mt-4">
                      <p className="font-bold text-3xl langlabel">
                        {language.name}
                      </p>
                      {/* <p>{language.name}</p> */}
                    </div>
                  </div>
                  <div>
                    <input
                      name="language"
                      checked={selectedLanguage?.name === language.name}
                      type="radio"
                      className="w-5 h-5 accent-green-600 border-green-600"
                    />
                  </div>
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="flex items-center px-4 gap-3">
          <input
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            type="checkbox"
            className="w-5 h-5 rounded-full border-2 border-green-600 bg-green-600 checked:bg-green-600"
          />

          <label className="pe-5 text-green-600 langlabel" htmlFor="terms">
            I agree to the terms and conditions and privacy policy
          </label>
        </div>
        <button
          onClick={() =>
            selectedLanguage && termsAccepted && onSelect(selectedLanguage.name)
          }
          disabled={!selectedLanguage || !termsAccepted}
          type="submit"
          className="w-80 h-13 rounded-3 text-white mx-auto my-3 acceptbtn"
        >
          ACCEPT
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;
