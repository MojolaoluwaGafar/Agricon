import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import ecommerce from "../../assets/istockphoto.png";
import { useNavigate } from "react-router-dom";

const OnboardingPage5 = () => {
  const navigate = useNavigate();


  const handleNext = () => {
    // If there's another onboarding page, navigate to it.
    // For example, if you had Page4, use navigate("/OnboardingPage4").
    // Otherwise, navigate to your main app screen.
    navigate("/numbersignup"); // Change "/main" to your main route
  };

  const handleBack = () => {
    navigate("/OnboardingPage4");
  };

  const handleSkip = () => {
    navigate("/numbersignup");
  };

  return (
    <div className="OnboardingPage1 min-h-100">
      <div className="card h-100 w-90 mx-auto">
        <div className="flex flex-row justify-between px-2">
          <span onClick={handleBack} className="text-6xl text-green-600">
            <IoIosArrowRoundBack />
          </span>
          <button
            onClick={handleSkip}
            className="text-green-600 border-0 bg-transparent fs-2 font-bold"
          >
            Skip
          </button>
        </div>
        <div>
          <img src={ecommerce} alt="" />
        </div>
        <div className="text-center my-3">
          <h1 className="onboardingheading">Market View</h1>
          <p className="py-3 px-4 leading-5 mx-auto font-bold text-base text-success">
            Get real time updates on market price of your crop from the near by
            Mandi. Check one month of price trends of crops from different
            Mandies also get news feed for future price predictions.
          </p>
        </div>
        <button
          onClick={handleNext}
          className="w-80 h-12 rounded-3 mx-auto my-4 fs-2 fw-bolder text-white nxtbtn"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default OnboardingPage5;
