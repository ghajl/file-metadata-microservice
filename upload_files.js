var express = require('express');
var app = express();
var multer = require('multer');

var upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 1000000,
    files: 1
  }
})

app.post('/', upload.single('file'), function(req, res) {

    // res.send(`<div class="container"><h3>File size: ${req.file.size} bytes</h3></div>`);
    res.send(JSON.stringify({fileSize: req.file.size}))
    res.end();
  

  
})

module.exports = app;