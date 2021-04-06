//start local sever by typing <node app.js> in the directory terminal
//go to <localhost:3000> in browser

const express = require("express")

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log("Server is running on localhost3000")
});