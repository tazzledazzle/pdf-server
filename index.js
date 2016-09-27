var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    fileUpload = require('express-fileupload'),
    //MongoClient = require('mongodb').MongoClient,
    //Server = require('mongodb').Server,
    //CollectionDriver = require('./collectionDriver').CollectionDriver,
    exec = require('child_process').exec,
    express = require('express');

var app = express();
app.set('port', process.env.PORT|| 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('src', path.join(__dirname, 'src'));
app.set('view engine', 'jade');
//app.use(express.bodyParser());
var cmd = "java -jar src/pdfbox-app-2.0.3.jar ExtractText -console ";


app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.post('/upload', function(req, res){
    var sampleFile;

    if (!req.files){
        res.send("no files uploaded");
        return;
    }

    console.log(req.files.uploadFile);
    sampleFile = req.files.uploadFile;
    if (sampleFile.mimetype !== "application/pdf"){
        res.send("Wrong file type uploaded!");
        return;
    }
    cmd += "tmp.pdf output.txt";
    sampleFile.mv('tmp.pdf', function(err){
       exec(cmd, function(err, stdo, stde){
           console.log(err);
           console.log(stdo);
           console.log(stde);
           console.log("Done!!!!!!");
           res.send('<p>'+stdo+'</p>');
       });
    });
    console.log("done");
    //todo: simple to get happy path


    //res.send("file uploaded");
});
app.get('/', function (req, res){
    //res.send('<html><body><h1>Hello World</h1></body></html>');
    res.render('main');
});




http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});