import React from 'react'
import logo from "../../assets/loader 1.png"
import freelance from "../../assets/freelanceworking.png"
import { IoLogoFacebook } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const NumberSignup = () => {
    const navigate = useNavigate()

     const handleSignUp = (e) => {
       e.preventDefault();
       console.log("Sign up data:", form);
       navigate("/")
       // Navigate to next page after sign up if needed:
       // navigate("/main");
     };
  return (
    <div className="OnboardingPage1 min-vh-100">
      <div className="card py-2 h-100 w-90 mx-auto">
        <img
          className="mx-auto"
          style={{ width: "61px", height: "65px" }}
          src={logo}
          alt=""
        />
        <img className="my-4 mx-auto" src={freelance} alt="" />
        <h className="text-center font-bold">Enter your mobile Number</h>
        <p className="text-center text-xs font-semibold pt-2">
          We Will send you the 4 digit veryfaction code
        </p>
        <input type="number" />
        <button onClick={handleSignUp} className="w-80 h-12 rounded-3 mx-auto my-4 fs-2 font-semibold text-white signupbtn">
          Sign Up
        </button>
        <div className="flex items-center justify-center gap-2">
          <span className="w-50 h-0.5 greencolorbg mb-3"></span>
          <p className="greencolor text-2xl font-semibold">OR</p>
          <span className="w-50 h-0.5 greencolorbg mb-3"></span>
        </div>
        <div className="relative mx-auto">
          <button className="fbcolorbg w-80 h-8 rounded-3 ">
            <a className="text-white text-sm text-decoration-none" href="##">
              CONTINUE WITH FACEBOOK
            </a>
          </button>
          <span className="absolute text-white text-2xl left-5 top-1">
            <IoLogoFacebook />
          </span>
        </div>
        <div className="relative mx-auto my-2">
          <button className="googlecolorbg w-80 h-8 rounded-3 ">
            <a className="text-white text-sm text-decoration-none me-3 sociallinks" href="##">
              CONTINUE WITH GOOGLE
            </a>
          </button>
          <span className="absolute text-white text-lg left-5 top-2">
            <FaGoogle />
          </span>
        </div>
      </div>
    </div>
  );
}

export default NumberSignup