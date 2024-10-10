import express from "express";
import "dotenv/config";
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("server is running.Deplyment Successful");
})
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running on port",PORT);
    
})