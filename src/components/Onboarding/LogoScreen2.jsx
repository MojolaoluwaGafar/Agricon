import React from 'react'
import loader from "../../assets/loader2.png"
import logo from "../../assets/logo-light.png"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogoScreen2 = () => {
    const navigate = useNavigate()

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/select-language");
      }, 1000);

      return () => clearTimeout(timer);
    }, [navigate]);
  return (
    <div  className={`logoscreen2 flex flex-col items-center justify-center  transition-opacity duration-500`}>
        <div className='flex flex-col items-center gap-4 logo2 '>
            <img src={loader} alt="" />
            <img src={logo} alt="" />
        </div>

    </div>
  )
}

export default LogoScreen2