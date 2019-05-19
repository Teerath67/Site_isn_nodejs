var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('request was made : ' + req.url);
  if(req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    myReadStream.pipe(res);
  } else if(req.url == '/creation_dun_compte.html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/creation_dun_compte.html', 'utf-8');
    myReadStream.pipe(res);
  }  else if(req.url == '/page_de_connexion.html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/page_de_connexion.html', 'utf-8');
    myReadStream.pipe(res);
  }   else if(req.url == '/page_de_connexion.html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/page_de_connexion.html', 'utf-8');
    myReadStream.pipe(res);
  }   else if(req.url == '/page_principale.html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/page_principale.html', 'utf-8');
    myReadStream.pipe(res);
  }   else if(req.url == '/questionnaire_1.html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/questionnaire_1.html', 'utf-8');
    myReadStream.pipe(res);
  } else if(req.url == '/style_main.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    var myReadStream = fs.createReadStream(__dirname + '/style_main.css', 'utf-8');
    myReadStream.pipe(res);
  }  else if(req.url == '/style_creation_compte.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    var myReadStream = fs.createReadStream(__dirname + '/style_creation_compte.css', 'utf-8');
    myReadStream.pipe(res);
  }  else if(req.url == '/style_page_connexion.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    var myReadStream = fs.createReadStream(__dirname + '/style_page_connexion.css', 'utf-8');
    myReadStream.pipe(res);
  } else if(req.url == '/style_page_principale.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    var myReadStream = fs.createReadStream(__dirname + '/style_page_principale.css', 'utf-8');
    myReadStream.pipe(res);
  } else if(req.url == '/style_questionnaire_1.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    var myReadStream = fs.createReadStream(__dirname + '/style_questionnaire_1.css', 'utf-8');
    myReadStream.pipe(res);
  }


});

server.listen(3000, '127.0.0.1');
console.log('listening port 3000');


/*
function submit_func() {

  var obj = {
    table: []
  };


  var x = document.getElementById("r1");
  if(x.checked == true) {
    obj.table.push({id: sexe, value:x.value});
  }


  var json = JSON.stringify(obj);
  fs.writeFile('myjsonfile.json', json, 'utf8', callback);
}
*/
