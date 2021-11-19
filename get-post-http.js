
const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./Form.html',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if(req.method==="POST" && req.url==='/post'){
        var body = "";
        req.on("data", function (data) {
            body += data;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }
}).listen(8888);