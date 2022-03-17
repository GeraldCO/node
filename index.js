var http = require('http');
let fs = require('fs');
let port = 3000;

function renderHTML(path, res){
    fs.readFile(path, null , function(error, data){
        if(error){
            res.writeHead(404);
            res.write('file not found');
        }else{
            res.write(data);
        }
        res.end();
    });
}

//create a server object:

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // http header
    var url = req.url;

    if(url ==='/'){
        renderHTML('./index.html', res);

    }else if(url ==='/contact'){
        renderHTML('./contact.html', res);

    }else if(url === '/about'){
        renderHTML('./about.html', res);
    }else {
        renderHTML('./404.html', res);
    }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});