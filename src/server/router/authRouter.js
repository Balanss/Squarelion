import { Router } from "express";
import jwt from "jsonwebtoken";







const router = Router();


// Adjusted Express route to send a JSON response with a message field
router.get("/login", async (req, res) => {
    if (req.query.password !== "" && req.query.email !== "") {
        res.status(200).json({ message: "next" });
        console.log('User Signed in :',req.query.email)
    } else {
        res.status(400).json({ message: "Login Failed" }); // Use else to prevent sending multiple responses
    }
});

router.post("/signup",async (req,res) => {
    const cookie = '978645'
    if(req.body.code === cookie){
        res.status(200).json({success:true,data:cookie})
    }else{
        res.status(400).json({success:false})
    }
})

router.get("/create", async (req, res) => {
    const {name, email, password} = req.query;

    // Check if any of the required fields are empty and return a 400 error response
    if (name === "" || email === "" || password === "") {
        return res.status(400).json({success: false, message: "Missing required fields"});
    } else {
        // Prepare userData object
        const userData = {
            accepted: 'no',
            level: 0,
            noti: 0,  
            WFH: 3,
            pto: 15,
            dateJoined: new Date().toDateString(),
            role: 'guest',
            team: 'guest',
        };

        // Send userData in the response with a 200 status code
        return res.status(200).json({success: true, data: userData});
    }
});

router.post("/createWithGoogle", async (req, res) => {
        // Prepare userData object
        const userData = {
            accepted: 'no',
            level: 0,
            noti: 0,  
            WFH: 3,
            pto: 15,
            dateJoined: new Date().toDateString(),
            role: 'guest',
            team: 'guest',
        };

        // Send userData in the response with a 200 status code
        return res.status(200).json({success: true, data: userData});
    
});

export default router;