const express=require("express"),path=require("path"),app=express(),port=8080;app.use(express.static(path.join(__dirname,"public"))),app.set("view engine","ejs"),app.set("views",path.join(__dirname,"public/views")),app.get("/",(a,b)=>{b.render("pages/index")}),app.get("/contact",(a,b)=>{b.render("pages/contact")}),app.get("/studentenwerk",(a,b)=>{b.render("pages/studentenwerk")}),app.listen(port,()=>{console.log(`App running on port ${port}!`)});