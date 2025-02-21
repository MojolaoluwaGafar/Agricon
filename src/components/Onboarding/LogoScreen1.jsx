import React from 'react'
import { useState } from 'react';
import logo from "../../assets/loader 1.png"
import agrikonlogodark from "../../assets/logo-dark.png"
import { useNavigate } from 'react-router-dom';




const LogoScreen1 = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate()

    const handleTap = () => {
      setFadeOut(true);
      setTimeout(() => {
       navigate("/logoscreen2") 
      }, 500); 
    };
  

  return (
    <div onClick={handleTap}  className={`logoscreen1 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"}`}>
      <div className="flex items-center justify-center logo">
        <img src={logo} alt="" />
        <img src={agrikonlogodark}  alt="" />
      </div>
      <p className="text-center fw-medium text-xl tap">Tap To Enter</p>
    </div>
  );
}

export default LogoScreen1