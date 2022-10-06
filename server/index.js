import  express  from "express";
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import ProductRouter from "./src/Router/Products.js";
import LoginRouter from "./src/Router/Login.js";

const app = express()
const URL =   "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net"
app.use(cors())
app.use(bodyParser.json())
const PORT = 7000


app.use("/products",ProductRouter)
app.use("/login",LoginRouter)

mongoose.connect(URL,{useNewUrlParser : true})
.then(() =>{
    app.listen(PORT,() =>{
        console.log("server iss runing ...")
    })
})
.catch((e) =>{
    console.log("connect mongodb Fales  : ",e)
})



