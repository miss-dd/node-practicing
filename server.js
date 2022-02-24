const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");
const { render, redirect } = require("express/lib/response");
const app = express();
var corsOptions = {
    origin: 'http://localhost:2000'
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res)=>{
    res.json({message: 'I am a bounty programmer'});
});
app.use("/home", (req, res)=>{
    res.redirect('/home');
})
require("./app/routes/tutorial.routes.js")(app);

const port = process.env.port || 2000;
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}.`);
})