
const express=require("express");

const app=express();

app.use(logger);

app.get("/libraries",(req,res)=>{
    console.log("/libraries");
    return res.send("/libraries","true")
});

app.get("/books",(req,res)=>{
    console.log("/books");
    return res.send("/books")
});


app.get("/authors",(req,res)=>{
    console.log("/authors");
    return res.send("/authors","true")
});




function logger(req,res,next){
    console.log("before");
    next();
    console.log("after");



}


app.listen(6190,()=>{
    console.log("6190")
})