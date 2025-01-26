import jwt from "jsonwebtoken";
export const generateToken=(userId,res)=>{
    const token=jwt.sign(
        {
            userId
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        });
    res.cookie("jwt",token,{
        expiresIn:"1d",
        httpOnly:true,   //prevent XSS attack cross site scripting attack
        sameSite :"strict", //prevent CSRF attack cross site request forgery attack
        secure:process.env.NODE_ENV!=="development" 
    });
    return token;
}