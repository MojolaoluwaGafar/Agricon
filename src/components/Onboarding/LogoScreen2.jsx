import React from 'react'
import loader from "../../assets/loader2.png"
import logo from "../../assets/logo-light.png"
import { useState,useEffect } from 'react'

const LogoScreen2 = ({onNext}) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          onNext(); // Move to Language Selection
        }, 500);
      }, 2000); // Show LogoScreen2 for 2 seconds

      return () => clearTimeout(timer);
    }, [onNext]);
  return (
    <div  className={`logoscreen2 flex flex-col items-center justify-center  transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}>
        <div className='flex flex-col items-center gap-4 logo2 '>
            <img src={loader} alt="" />
            <img src={logo} alt="" />
        </div>

    </div>
  )
}

export default LogoScreen2