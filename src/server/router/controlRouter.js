import { Router } from "express";
import jwt from "jsonwebtoken";




const router = Router();


router.get("/level",async (req,res) => {
setTimeout(()=> {
    if(req.query.level > 5){
        res.status(200).json({message:'User is authenticated'})
} else {
    res.status(401).json({message:'User is not authenticated'})}

},1000)

})

router.get("/admin",async (req,res) => {

        if(req.query.level > 9){
            res.status(200).json({message:'User is authenticated',level:9,status:200})
    } else {
        res.status(401).json({message:'User is not authenticated',})}
    })



  router.get("/clients",async (req,res) => {     
        if(req.query.level < 7){
            res.status(401).json({message:'User is not authenticated',level:false,status:401})
        } else {
            console.log(req.query.level)
            res.status(200).json({message:'User is authenticated',level:true,status:200})
        }

  

    });
export default router;