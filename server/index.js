import  express  from "express";
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import ProductRouter from "./src/Router/Products.js";
import LoginRouter from "./src/Router/Login.js";
import NewsRouter from "./src/Router/News.js";
import OderRouter from "./src/Router/Oder.js";
import ContactRouter from "./src/Router/Contact.js";




const app = express()
const URL =   "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net"

app.use(cors())
app.use(bodyParser.json())
const PORT = 7000


app.use("/products",ProductRouter)
app.use("/login",LoginRouter)
app.use("/news",NewsRouter)
app.use("/oder",OderRouter)
app.use("/contact",ContactRouter)




import * as http from "http"
import { Server } from "socket.io"



mongoose.connect(URL,{useNewUrlParser : true})
.then(() =>{
    app.listen(PORT,() =>{
        console.log("server iss runing ...", PORT)
    })

    var server = http.createServer(app).listen(7001, function(){
        console.log("Express server listening on port " + 7001);
      });
            
    const socketIo = new Server(server,{
        cors :{
            origin: "*",
        }
    })
    
    socketIo.on("connection",(res) =>{
        console.log("connection :: ",res.id);

        res.emit("getId", res.id)
    
        res.on("sendDataClient",(req) =>{
            socketIo.to(req.id).emit(req)
        })
    
        res.on("disconnect",() =>{
            console.log("Client disconnected");
        })
    })
    
})
.catch((e) =>{
    console.log("connect mongodb Fales  : ",e)
})



