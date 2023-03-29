import jwt from "jsonwebtoken"
//get bcrypt
import bcrypt from "bcrypt"

const createToken = (user) =>
{
    //token with id username and expiry time
    const token = jwt.sign({
        id: user.id,
         username: user.username,
         //expiry
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
    },process.env.JWT_SECRET)
    return token
    
    
}

const protect = async(req,res,next) => 
{
    const bearer =  req.headers.authorization;
    //bearer is authentication dezign pattern 
    if(!bearer)
    {
        res.send({message:"You are not authoriszed mf. Do it first lol!"})
    }
    const [,token] = bearer.split(" ")
    if(!token)
    {
        res.send({message:"Not validate. Fuck off"})
    }
    try
    {
        //verify the token
        const user = jwt.verify(token,process.env.JWT_SECRET);
        req.user = user
        next()
    }catch (e)
    {
        console.error(e)
        res.send({message:"Cannot verify the jwt"})
    }

    next()

}

//hash function using bcrypt
const hashPassword = async (password) =>
{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword
}

//compare Password functions
const comparePassword = async (password,hashedPassword) =>
{
    const isValid = await bcrypt.compare(password,hashedPassword);
    return isValid
}

export {createToken,protect,hashPassword,comparePassword}