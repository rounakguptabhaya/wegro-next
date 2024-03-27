"use client"

import Loading from '@/components/Loading';
import LoginForm from '@/components/LoginForm'
import PageTitle from '@/components/PageTitle';
import React, { useEffect, useRef, useState } from 'react'

// import { useRouter } from 'next/router';

export default function Login() {
  const [isLoading, setisLoading] = useState(true);
  // const router = useRouter();
//   const phoneNumber = useRef();

  async function getUser() {
    const postData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await fetch(`http://localhost:3000/api/users`,postData);
  }

 
  async function addUser(number, otp) {
    const alphabetRegex = /[a-zA-Z]/;

    if (alphabetRegex.test(number)) {
        console.log("The string contains alphabets");

    } else {
        // console.log(number,otp);
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone_number: number,
                otp: otp,
            }),
        }

        const res = await fetch('http://localhost:3000/api/users', postData);

        const response = await res.json();

        // router.push('/validateOtp/page')

        console.log(response);
    }




  }

  useEffect(() => {
    const timer = setTimeout(() => {
        setisLoading(false);
    },2000);

    return () => clearTimeout(timer);
  },[])

  return (
    <>
        
        {/* <div>
            {isLoading ? <Loading /> : <LoginForm />}
        </div> */}
        <div>{isLoading && <Loading/>}</div>
        <div>
            <LoginForm onAdd={addUser}/>
        </div>
    </>
    
  )
}
