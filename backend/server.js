const express = require("express");
const cors=require("cors");
const mysql=require("mysql");
const app = express(); 
app.use(express.json());

app.use(cors());

const db=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"ak"

    }
)

app.get("/",(req,res)=>{
const sql="SELECT* FROM student";
db.querry(sql,(err,data)=>{
    if(err) return res.json("error");
    return res.json(data);
}) ;  
});
app.post('/create',(req,res)=>{
    const sql="INSERT INTO student ('FirstName','LastName','EmployeeCode','Emailid','ContactNumber','Department') VALUES (?)";
    const values=[
        req.body.FirstName,
        req.body.LastName,
        req.body.EmployeeCode,
        req.body.Emailid,
        req.body.ContactNumber,
        req.body.Department
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
app.put('/update/:id',(req,res)=>{
    const sql="update student set 'FirstName'=? ,'LastName'=?, 'EmployeeCode'=?, 'Emailid'=?, 'ContactNumber'=?, 'Department'=? where ID=?";
    const values=[
        req.body.FirstName,
        req.body.LastName,
        req.body.EmployeeCode,
        req.body.Emailid,
        req.body.ContactNumber,
        req.body.Department
    ]
    const id=req.params.id;
    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
app.delete('/delete/:id',(req,res)=>{
    const sql="DELETE FROM student where ID=?";
   
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})


app.listen(8003, () => {
    console.log("listening");
});
