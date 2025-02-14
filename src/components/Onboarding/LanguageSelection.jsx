import React, { useState } from "react";

const LanguageSelection = ({ onSelect }) => {
  const languages = [
    { name: "English", native: "English", initial: "E" },
    { name: "Hindi", native: "हिंदी", initial: "H" },
    { name: "Bengali", native: "বাংলা", initial: "B" },
    { name: "Maithili", native: "मैथिली", initial: "M" },
    { name: "Gujarati", native: "ગુજરાતી", initial: "G" },
    { name: "Kannada", native: "ಕನ್ನಡ", initial: "K" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);


  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    onSelect(language.name);
  };

  return (
    <div className="languageselectionscreen">
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
                      <p className="font-bold text-3xl">{language.name}</p>
                      {/* <p>{language.name}</p> */}
                    </div>
                  </div>
                  <div>
                    <input
                      name="language"
                      checked={selectedLanguage?.name === language.name}
                      className="w-5 h-5"
                      type="radio"
                    />
                  </div>
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="flex items-center px-4 gap-4">
          <input
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="w-15 h-15 text-green-600"
            type="checkbox"
          />
          <label className="pe-5 text-green-600" htmlFor="terms">
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
