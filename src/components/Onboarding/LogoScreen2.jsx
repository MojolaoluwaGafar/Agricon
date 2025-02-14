import React from 'react'
import loader from "../assets/loader2.png"
import logo from "../assets/logo-light.png"

const LogoScreen2 = () => {
  return (
    <div className='logoscreen2'>
        <div className='flex flex-col items-center gap-4 logo2 '>
            <img src={loader} alt="" />
            <img src={logo} alt="" />
        </div>

    </div>
  )
}

export default LogoScreen2