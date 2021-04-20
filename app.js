//*start local sever by typing <node app.js> in the directory terminal
//*go to <localhost:3000> in browser

const express = require("express")
const multer = require("multer") // Multer allows localhost file upload
const upload = multer({
    dest: '/data/uploads/' //non-decoded audio file saved
  }); 
const app = express();

app.use('/public', express.static(__dirname + '/public'))
app.use('/components', express.static(__dirname + '/components'))
app.use('/data', express.static(__dirname + '/data'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//run load function onsubmit. *req.file is the uploaded mp3
//! local file name MUST match attributal name in html
app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
  //!TODO fix the import file. pass the multer files name and import in the prepaudio.js for decoding and buffer
});

app.listen(3000, () => {
    console.log("Server is running on localhost3000 you goon")
});
