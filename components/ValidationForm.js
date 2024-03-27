"use client"

import Lottie from "lottie-react"
import animation from "@/public/animations/login-animation"
import { IoMdFingerPrint } from "react-icons/io"
import { useRef, useState } from "react"

import React from 'react'

const ValidationForm = (props) => {

  const phoneNumber = useRef();
  const otpNumber = useRef();

  const [input, setInput] = useState("");
  const [otp,setOtp] = useState("");

  function handleClick(event) {
    setOtp("");
    props.onSend(phoneNumber.current.value.trim(), otpNumber.current.value.trim());
    event.preventDefault();
  }
  return (
    <div className="login-container">
      <div className="login-left">
          <Lottie animationData={animation}  className="login-animation"/>
      </div>
      <div className="login-right .s-border">
        <div className="logo">
            <img src="images/wegro-logo.png"/>
        </div>
        <div className="login-form">
            <h2>Enter OTP received on WhatsApp</h2>
            
        </div>
        <div className="login-form-inputs">
          {/* <p>WhatsApp OTP</p> */}
              <div className="validate-container">
                <div className="validate-container-item">
                    <span className="whatsapp-container"><img className="whatsapp-logo" src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png"/></span>
                    <input name="phone-number" type="text" ref={phoneNumber} className="phone-number-input" placeholder="Enter Phone Number" value={input} onChange={e => setInput(e.target.value)}/>
                </div>
                
                <div className="validate-container-item">
                    <IoMdFingerPrint className="validate-logo"/>
                    <input name="otp-number" type="text" ref={otpNumber} className="phone-number-input" placeholder="WhatsApp OTP" value={otp} onChange={e => setOtp(e.target.value)}/>
                </div>
                  
              </div>

              <div>
                <button className="otp-button" onClick={handleClick}>Submit OTP</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ValidationForm