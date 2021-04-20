//start local sever by typing <node app.js> in the directory terminal
//go to <localhost:3000> in browser

const express = require("express")
const multer = require("multer") //* allows localhost file upload
const upload = multer({
    dest: 'uploads/' //*this saves your file into a directory called "uploads"
  }); 
const app = express();

//TODO configure express

//functions
app.use('/public', express.static(__dirname + '/app/public'))
app.use('/components', express.static(__dirname + '/app/components'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app/public/index.html");
});

//run load function on submit. *req.file is the uploaded mp3
//! local file name MUST match attributal name in html
app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
  //!TODO fix the import file.
  //var impFile
  //export req.file as impFile
});

app.listen(3000, () => {
    console.log("Server is running on localhost3000")
});
