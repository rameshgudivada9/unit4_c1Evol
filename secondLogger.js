

const express=require("express");

const app=express();

app.get("/books",(req,res)=>{
    // console.log("/books");
    return res.send([{ route: "/books"}])
});
app.use(checkPermission);

app.get("/libraries",(req,res)=>{
    // console.log("/libraries");
    return res.send([{route: "/libraries", permission: "true"}])
});



app.get("/authors",(req,res)=>{
    // console.log("/authors");
    return res.send([{ route: "/authors", permission: true}])
});

function checkPermission(req, res, next) {
  if (req.path === "/libraries") {
    req.role = "libraries";
  } else if (req.path === "/authors") {
    req.role = "authors";
  } else {
    req.role = "somebody";
  }
  console.log("author");
  next();
}




function checkPermission(req,res,next){
    console.log("before");
    next();
    console.log("after");



}


app.listen(6290,()=>{
    console.log("6290")
})