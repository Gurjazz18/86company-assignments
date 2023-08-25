const express=require("express")
const app=express()
const cors=require("cors")
const morgan=require("morgan")
const { connectDB } = require("./config/db")
const { UserRouter } = require("./controllers/userRoute")
const { PostRouter } = require("./controllers/postRoute")
const { authentication } = require("./Middleware/authentication")
require('dotenv').config()



app.use(express())
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


app.use("/user",UserRouter)
app.use(authentication)
app.use("/media",PostRouter)



app.listen(process.env.PORT,async()=>{
 
    try {

        await connectDB()
       console.log("Server Is Running")
        
    } catch (error) {

        console.log("error",error)
        
    }
})