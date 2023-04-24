const express=require("express");
const app=express();
const mongoose=require("mongoose");
const morgan=require("morgan");
const bodyParser=require("body-parser");
const cors=require("cors");

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

// middleware
app.use(cors());

const dotenv=require("dotenv");
dotenv.config({path:"config.env"})

const PORT=process.env.PORT;

app.listen(PORT,(req,res)=>{
    console.log(`server ${PORT} is connected`)
});

app.get("/",(req,res)=>{
    res.send("main page")
})

const personRoute=require("./router");
app.use("/details",personRoute)

const connectDB= async()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected : ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
connectDB();