const express=require("express");
const { folder, createfile } = require("./filesys");

const WEB_SERVER =express();
WEB_SERVER.listen(4000,"localhost",()=>{
     
    console.log("http://localhost:4000")
   createfile()
})

WEB_SERVER.get("/",(request,response)=>{
    createfile();
    return response.send(`<html>
        <head>
        <title>HOME</title>
        </head>
        <body>
        <h1>Home page</h1>
        </body>
        </html>`)
})