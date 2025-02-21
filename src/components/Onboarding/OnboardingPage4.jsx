import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import ecommerce from "../../assets/App-Marketing.png";
import ellipse24 from "../../assets/Ellipse 24.png";
import ellipse27 from "../../assets/Ellipse 27.png";
import { useNavigate } from "react-router-dom";

const OnboardingPage4 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/OnboardingPage5"); 
  };

  const handleBack = () => {
    navigate("/OnboardingPage3");
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
          <h1 className="onboardingheading">Watch Posts & Videos</h1>
          <p className="py-3 px-4 leading-5 mx-auto font-bold text-base text-success">
            Watch Crop related customised Posts, Videos, News, Krishi Gyaan,
            Shemes, Subsidy, Articles from our experts as per your needs which
            Increase your Profit & knowledgeof farming.
          </p>
        </div>
        <div className="flex mx-auto gap-2">
          <img src={ellipse24} alt="" />
          <img src={ellipse24} alt="" />
          <img src={ellipse24} alt="" />
          <img src={ellipse27} alt="" />
        </div>
        <button
          onClick={handleNext}
          className="w-80 h-12 rounded-3 mx-auto my-4 fs-2 fw-bolder text-white nxtbtn"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default OnboardingPage4;
