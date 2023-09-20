const express = require("express");
const path =require("path");

const apps =express();

apps.get("/",(req,res) => {
    //res.send("Bienvenido a mi pagina web ");

    res.sendFile(path.join (__dirname + "/index.html"));

});

apps.listen (8000, ()=>{
    console.log("server lintening on port", 8000);
});