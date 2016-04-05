/**
 * Created by damianaruj on 4/4/16.
 */
var express = require('express');
var app = express();
var fs = require('fs');

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res){
    fs.readdir(__dirname + '/modules/', function(err, folders) {
        res.render('index',{folders: folders});
    });
});

fs.readdir(__dirname + '/modules/', function(err, folders) {
    folders.forEach(function(folder) {
        app.use('/static/'+ folder, express.static('modules/' + folder));
        app.get('/' + folder, function(req, res){
            res.render('modules/' + folder + '/index',{moduleName: folder})
        });
    });
});

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});