const express=require('express');

const app=express();
app.listen(3000,()=>{
    console.log("app is started on 3000");
});


users=[
    {
    "id":1,
    "username":"Charvit",
    "address":"gujrat",
    },
    {
    "id":2,
    "username":"Shubham",
    "address":"Pune",   
    }
]

app.get("/users",(req,res)=>{
    res.json(users);
})