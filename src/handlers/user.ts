import prisma from "../db"
import { hashPassword,comparePassword, createToken } from "../modules/auth";

export const createNewUser = async (req,res) =>
{
    const {username,password} = req.body;
    //check if alraedy same user exist in db
    const userExist = await prisma.user.findUnique({
        where:{
            username:username
        }
    })
    if(userExist)
    {
       return res.send({message:"User already exist"})
    }
    console.log("USER DONT EXIST ALREADY :D")
    //create new user
    const user = await prisma.user.create({
        data:{
            username:username,
            password:await hashPassword(password),

        }
    })
    console.log(user)
    res.send({'message':"User created successfully"})
    

}

export const signIn = async (req,res) =>
{
    const {username,password} = req.body;
    console.log(username,password)
    const user = await prisma.user.findUnique({
        where:{
            username:username
        }
    })
    console.log(user)
    if(!user)
    {
        res.send({message:"User not found"})
    }
    const isValid = comparePassword(password,user.password);
    if(!isValid)
    {
        res.send({message:"Password is not valid"})
    }
    const token = createToken({id:user.id,username:user.username})
    res.send({token})
}