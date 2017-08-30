const express = require('express');
// const mongoose = require('mongoose');
var path = require('path');

const app = express();

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
	app.use('/css', express.static('css'));
	app.use('/js', express.static('js'));
	app.use('/img', express.static('img'))
})

app.listen(8080, function(){
	console.log('Server started on port 8080');
});

