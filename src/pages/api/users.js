import { query } from "@/src/lib/db";

export default async function handler(req, res){
    let users;
    let message
    if(req.method === "GET"){
        const users =  await query({
            query:"SELECT * FROM user ORDER BY id",
            values:[]
        });
        res.status(200).json({users:users});
    }

    if(req.method === "POST"){
        const phoneNumber = req.body.phone_number;
        const otp = req.body.otp;

        console.log(phoneNumber,otp);

        const addUser = await query({
            query: "INSERT INTO user (phone_number, otp) VALUES (?,?)",
            values: [phoneNumber, otp],
        });

        if(addUser.insertId){
            message="success";
        }else{
            message="error";
        }

        let user = {
            phone_number: phoneNumber,
            otp: otp,
        };
        
        res.status(200).json({message:message, user:user});

    }
}