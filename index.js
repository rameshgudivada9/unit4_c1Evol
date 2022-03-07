
const express=require("express");

const app=express();

app.use(logger);

app.get("/books",(req,res)=>{
    // console.log("/books");
    return res.send([{ route: "/books"}])
});
app.get("/libraries",(req,res)=>{
    // console.log("/libraries");
    return res.send([{route: "/libraries", permission: "true"}])
});



app.get("/authors",(req,res)=>{
    // console.log("/authors");
    return res.send([{ route: "/authors", permission: true}])
});




function logger(req,res,next){
    console.log("before");
    next();
    console.log("after");



}


app.listen(6290,()=>{
    console.log("6290")
})