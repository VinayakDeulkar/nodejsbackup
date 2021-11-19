import http from 'http';
// const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('<h3>Hello ! Node js</h3>')
    }
    else  if(req.url==='/about'){
        res.write('<h3>About Page js</h3>')
    }
    else  if(req.url==='/gallery'){
        res.write('Gallery Page ')
    }
    res.end()
})
server.listen(5000);
console.log('Server work on 5000 port');