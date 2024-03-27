"use client"


import Lottie from "lottie-react"
import animation from "@/public/animations/login-animation"
import { useRef, useState } from "react"


const Login = (props) => {

  const phoneNumber = useRef();

  const [input, setInput] = useState("");

  function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
  }

  function handleClick(event) {
    setInput("")
    const otp = generateOTP();
    props.onAdd(phoneNumber.current.value.trim(), otp);
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
            <h2>Sign up / Login</h2>
            
        </div>
        <div className="login-form-inputs">
          <p>Enter WhatsApp Number</p>
              <div className="contact-container">
                <span className="whatsapp-container"><img className="whatsapp-logo" src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png"/></span>
                <input name="phone-number" type="text" ref={phoneNumber} className="phone-number-input" placeholder="Enter WhatsApp Number" value={input} onChange={e => setInput(e.target.value)}/>  
              </div>

              <div className="terms-conditions">
                <p>* By clicking 'Get OTP', you agree to our <a href="#">Terms & Conditions</a>.</p>
              </div>
              
              <div>
                <button className="otp-button" onClick={handleClick}>Get OTP on WhatsApp</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login