import React from 'react'
import logo from "../assets/loader 1.png"
import agrikonlogodark from "../assets/logo-dark.png"


const LogoScreen1 = () => {
  return (
    <div className='logoscreen1'>
        <div className='flex items-center justify-center logo'>
            <img src={logo} alt="" />
            <img src={agrikonlogodark} alt="" />
        </div>
        <p className='text-center fw-medium text-xl tap'>Tap To Enter</p>

    </div>
  )
}

export default LogoScreen1