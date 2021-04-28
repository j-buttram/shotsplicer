//*start local sever by typing <node app.js> in the directory terminal
//*go to <localhost:3000> in browser

const express = require("express")
const multer = require("multer") // Multer allows localhost file upload
const path = require("path")
const fs = require("fs")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },   
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.mp3')}
})

const app = express();0
var upload = multer({ storage: storage })
const directory = path.join(__dirname, '../shotsplicer/uploads') //file upload directory


app.use('/public', express.static(__dirname + '/public'))
app.use('/components', express.static(__dirname + '/components'))
app.use('/data', express.static(__dirname + '/data'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//multer upload
app.post('/uploads', upload.single('file-to-upload'), (req, res) => {
  console.log(req.file)
  console.log(res.file)
  res.redirect('/');

});

app.listen(3000, () => {
    console.log("Server is running on localhost3000 you goon")
});

//delete all files from folder on button click
app.post('/cleanFolder', function(req, res) {
  fs.readdir(directory, (err, files) => {
    if(err) throw err;
  
    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if(err) throw err;
      })
    }
  })
});
