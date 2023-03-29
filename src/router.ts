import express from "express"
//import from express-validator
import {check,body,validationResult} from "express-validator"

const {Router} = express;

const router = Router()

/**
 * Product routes
 */
router.get("/product",async(req,res) => {
    res.send({message:req.user})
})
router.get("/product/:id",async(req,res) => {})
router.put("/product/:id",async(req,res) => {})
router.post("/product",[body("username").isLength({min:5})],async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    res.send({message:"Product created successfully"})
})  
router.delete("/product/:id",async(req,res) => {})

/**
 * Update routes
 */
router.get("/update",async(req,res) => {})
router.get("/update/:id",async(req,res) => {})
router.put("/update/:id",async(req,res) => {})
router.post("/update",async(req,res) => {})
router.delete("/update/:id",async(req,res) => {})
/**
 * UpdatePoints Routes
 */
router.get("/updatepoint",async(req,res) => {})
router.get("/updatepoint/:id",async(req,res) => {})
router.put("/updatepoint/:id",async(req,res) => {})
router.post("/updatepoint",async(req,res) => {})
router.delete("/updatepoint/:id",async(req,res) => {})


export default router