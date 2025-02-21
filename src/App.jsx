import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import LogoScreen1 from "./components/Onboarding/LogoScreen1";
import LogoScreen2 from "./components/Onboarding/LogoScreen2";
import LanguageSelection from "./components/Onboarding/LanguageSelection";
import OnboardingPage1 from "./components/Onboarding/OnboardingPage1";
import OnboardingPage2 from "./components/Onboarding/OnboardingPage2";
import OnboardingPage3 from "./components/Onboarding/OnboardingPage3";
import OnboardingPage4 from "./components/Onboarding/OnboardingPage4";
import OnboardingPage5 from "./components/Onboarding/OnboardingPage5";
import NumberSignup from "./components/SignUp pages/NumberSignup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoScreen1 />} />
        <Route path="/logoscreen2" element={<LogoScreen2 />} />
        <Route path="/select-language" element={<LanguageSelection />} />
        <Route path="/OnboardingPage1" element={<OnboardingPage1 />} />
        <Route path="/OnboardingPage2" element={<OnboardingPage2 />} />
        <Route path="/OnboardingPage3" element={<OnboardingPage3 />} />
        <Route path="/OnboardingPage4" element={<OnboardingPage4 />} />
        <Route path="/OnboardingPage5" element={<OnboardingPage5 />} />
        <Route path="/numbersignup" element={<NumberSignup/>} />
      </Routes>
    </Router>
  );
}

export default App;
