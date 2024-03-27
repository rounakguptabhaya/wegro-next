import { query } from "@/src/lib/db";

export default async function handler(req, res){
    let users;
    let message
    
    if(req.method === "POST"){
        const phoneNumber = req.body.phone_number;
        const otp = req.body.otp;

        console.log(phoneNumber,otp);

        const loginUser = await query({
            query: "SELECT * FROM user WHERE phone_number = ? AND otp = ?",
            values: [phoneNumber, otp],
        });

        if(loginUser.length > 0){
            message="success";
        }else{
            message="phone number or otp is wrong";
        }

        let user = {
            phone_number: phoneNumber,
            otp: otp,
        };
        
        res.status(200).json({message:message, user:user});

    }
}