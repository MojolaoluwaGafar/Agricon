import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import ecommerce from "../../assets/e-commerce-seo1 1.png"
import ellipse24 from "../../assets/Ellipse 24.png"
import ellipse27 from "../../assets/Ellipse 27.png";
import { useNavigate } from 'react-router-dom';

const OnboardingPage1 = () => {
     const navigate = useNavigate();
  
      const handleNext = () => {
        navigate("/OnboardingPage2");
      };
  
      const handleSkip = () => {
        navigate("/"); // change "/main" to your main app route
      };
  
      // Optional: if you want the back arrow to do something, you can add a handler
      const handleBack = () => {
        navigate(-1); // go back one page
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
        <div className='text-center mt-4'>
            <h1 className='onboardingheading'>Buy Agri Products</h1>
            <p className='py-2 px-4 leading-5 mx-auto font-bold text-base text-success'>Order Seeds, Crop Nutrition, Crop Protection,Fertilizers, Hardwares, Animal needs etc from the app get delivered to your doorstep.</p>
        </div>
        <div className='flex mx-auto gap-2'>
          <img src={ellipse27} alt="" />
          <img src={ellipse24} alt="" />
          <img src={ellipse24} alt="" />
          <img src={ellipse24} alt="" />
        </div>
          <button onClick={handleNext} className='w-80 h-12 rounded-3 mx-auto my-4 fs-2 fw-bolder text-white nxtbtn'>Next</button>
      </div>
    </div>
  );
}
export default OnboardingPage1