const express=require("express");
const mysql=require('mysql');
const cors=require('cors');
const bodyParser = require('body-parser')

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})
app.post('/signup',(req,res)=>{
    const sql="INSERT INTO login(`name`,`email`,`password`)VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
]
        db.query(sql,[values],(err,data)=>{
            if(err){
                return res.json("Error");
            }
            return res.json(data);
        })
    
})




app.post('/login',(req,res)=>{
    const sql="SELECT * FROM login where `email` = ? AND `password` = ? ";
    
        db.query(sql,[ req.body.email,req.body.password],(err,data)=>{
            if(err){
                return res.json("Error");
            }
           if(data.length>0){
            return res.json("Success");
           }
           else{
            return res.json("Failed");
           }
        })
    
})


app.post('/home', (req,res)=>{
    const sql="INSERT INTO student_attendance(`rollNo` ,`08-Aug-2023`,`09-Aug-2023` ,`10-Aug-2023` ,`11-Aug-2023`,`12-Aug-2023`) VALUES (?)";
    const values=[
        req.body.rollNo,
        req.body.date1,
        req.body.date2,
        req.body.date3,
        req.body.date4,
        req.body.date5,
]
        db.query(sql,[values], (err, data) =>{
            if(err){
                console.log(err);
            }
            return res.json(data);
        })
    
})



app.listen(8081,()=>{
    console.log("Server is running on 8081");
})