import { Router } from "express";


const router = Router();


router.post('/ai', async(req,res) => {
    const {text} = req.body;
    const url = "https://api.edenai.run/v2/workflow/9951bc23-3949-478e-a0ac-8d03644e5da4/execution/";
    const payload = { "prompt": text };
    console.log(payload)
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.VITE_EDEN_TOKEN}`
            },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        res.status(200).json({ message: 'Execution started', id: result.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error starting execution' });
    }


})



router.get('/aiGet', async(req,res) => {
    const id = req.query.id;
    console.log(req.query)
    const getUrl = `https://api.edenai.run/v2/workflow/9951bc23-3949-478e-a0ac-8d03644e5da4/execution/${id}`
 
    
    try {
        const response = await fetch(getUrl, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.VITE_EDEN_TOKEN}`
            },
        });
        const result = await response.json();
        res.status(200).json(result);
        console.log(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving execution' });
    }
})

export default router;