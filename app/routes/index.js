/* jshint node: true */
'use strict';
var multer = require('multer');
var upload = multer();

module.exports = function (app) {
    app.post('/get-file-size', upload.any(), function(req, res, next){
        var file = req.files[0];
        res.send({size: file.size});
    });
};