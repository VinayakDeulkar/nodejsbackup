
const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        try{
            const data1 = fs.readFileSync('./EmployeeDetails.html', 'utf8')
            const data2 = fs.readFileSync('./employeedetails.txt', 'utf8')
            const arr=data2.split('\n')
            
            res.write(data1);
            for(let i of arr){
                res.write(`<br/>${i}`)
            }
            res.end()
        }
        catch(err){
            console.log(err);
        }
    }
    else if(req.method==="GET" && req.url==='/AddEmployee'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./AddEmployee.html',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if(req.method==="POST" && req.url==='/'){
        var body = "";
        req.on("data", function (data) {
            body += data;
        });
            fs.readFile('./employeedetails.txt',(err,empdata)=>{
                if(empdata.length==0){
                    fs.writeFile('./employeedetails.txt',`${body}`,(error)=>{
                        if(error) throw error;
                        res.writeHead(301,{Location:'/'})
                        res.end();
                    })
                }
                else{
                    fs.appendFile('./employeedetails.txt',`\n${body}`,(err)=>{
                        if(err) throw err;
                        res.writeHead(301,{Location:'/'})
                        res.end()
                    })
                }
                
        });
        
    }
}).listen(6677);