import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import LogoScreen1 from "./components/Onboarding/LogoScreen1";
import LogoScreen2 from "./components/Onboarding/LogoScreen2";
import LanguageSelection from "./components/Onboarding/LanguageSelection";
import OnboardingPage1 from "./components/Onboarding/OnboardingPage1";
import OnboardingPage2 from "./components/Onboarding/OnboardingPage2";

function App() {
  const [screen, setScreen] = useState(1);

  const handleNext = () => {
    setScreen((prev) => prev + 1);
  };
  
  return (
    <div>
      {screen === 1 && <LogoScreen1 onNext={handleNext} />}
      {screen === 2 && <LogoScreen2 onNext={handleNext} />}
      {screen === 3 && <LanguageSelection onNext={handleNext} />}
      {screen === 4 && <OnboardingPage1 onNext={handleNext} />}
      {screen === 5 && <OnboardingPage2 onNext={handleNext} />}
      <OnboardingPage2 />
    </div>
  );
}

export default App;
