"use client"

import ValidationForm from "@/components/ValidationForm";


export default function validateOtp(){

    async function handleSend(number,otp) {
        console.log(number,otp);
        const alphabetRegex = /[a-zA-Z]/;

        if (alphabetRegex.test(number) || alphabetRegex.test(otp)) {
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

            const res = await fetch('http://localhost:3000/api/validate', postData);

            const response = await res.json();
            console.log(response);
        }
    }

    return(
        <ValidationForm onSend={handleSend}/>
    )
} 