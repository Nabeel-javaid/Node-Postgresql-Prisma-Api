import { createNewUser, signIn } from './handlers/user';
import express from "express"
import router from "./router"
import morgan from "morgan"
import cors from "cors"
import { createToken, protect } from "./modules/auth";


const app = express();
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use((req,res,next) => 
{
    req.secret = "doggy";
    next()
})



app.get("/login",async(req,res) => 
{
    const token = createToken({id:1,username:"nirlin_01"});
    res.send(token)
});

app.use("/api",protect,router)
app.post("/user",createNewUser);
app.post("/signin",signIn)


export {app}