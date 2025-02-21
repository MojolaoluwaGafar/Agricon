import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import ecommerce from "../../assets/images 1.png"
import ellipse24 from "../../assets/Ellipse 24.png"
import ellipse27 from "../../assets/Ellipse 27.png";
import { useNavigate } from 'react-router-dom';

const OnboardingPage2 = () => {
    const navigate = useNavigate()


     const handleNext = () => {
       // If there's another onboarding page, navigate to it.
       // For example, if you had Page3, use navigate("/OnboardingPage3").
       // Otherwise, navigate to your main app screen.
       navigate("/OnboardingPage3"); // Change "/main" to your main route
     };

     const handleBack = () => {
       navigate("/OnboardingPage1");
     };

     const handleSkip = () => {
       navigate("/numbersignup");
     };

  return (
    <div className="OnboardingPage1 min-vh-100">
      <div className="card h-100 w-90 mx-auto">
        <div className="flex flex-row justify-between px-2">
          <span onClick={handleBack} className="text-6xl text-green-600">
            <IoIosArrowRoundBack />
          </span>
          <button onClick={handleSkip} className="text-green-600 border-0 bg-transparent fs-2 font-bold">
            Skip
          </button>
        </div>
        <div>
          <img src={ecommerce} alt="" />
        </div>
        <div className="text-center my-3">
          <h1 className="onboardingheading">Agri Expert Advice</h1>
          <p className="py-3 px-4 leading-5 mx-auto font-bold text-base text-success">
            Upload picture and get real time solutions from Hi Kisan Agri
            Experts for any crop issues. Oue suppoort for Profit Farming and
            other Agri services.
          </p>
        </div>
        <div className="flex mx-auto gap-2">
          <img src={ellipse24} alt="" />
          <img src={ellipse27} alt="" />
          <img src={ellipse24} alt="" />
          <img src={ellipse24} alt="" />
        </div>
        <button onClick={handleNext} className="w-80 h-12 rounded-3 mx-auto my-4 fs-2 fw-bolder text-white nxtbtn">
          Next
        </button>
      </div>
    </div>
  );
}
export default OnboardingPage2