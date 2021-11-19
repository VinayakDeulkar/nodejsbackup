// import http from 'http';
// import fs from 'fs'
const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url==='/readfile'){
        const data=fs.readFileSync('notes.txt')
        console.log(data);
        res.write(data);
    }
    else if(req.url==='/writefile'){
        fs.writeFile('profile.txt','hello how are you',(err)=>{
            if(err) {
                res.write(err)
            }
            else{
                res.write('File created successfully')
            }
        })
    }
    else if(req.url==='/appendfile'){
        fs.appendFile('profile.txt','what are u doing',(err)=>{
            if(err) {
                res.write(err)
            }
            else{
                res.write('File appended successfully')
            }
            
        })
    }
    else if(req.url==='/deletefile'){
        fs.unlink('vinayak.txt',(err)=>{
            if(err) throw err;
            console.log("File delete successfully");
            res.write('File delete successfully')
        })
    }
    else if(req.url==='/renamefile'){
        fs.rename('profile.txt','profile2.txt',(err)=>{
            if(err) throw err;
            console.log("File rename successfully");
            res.write('File rename successfully')
        })
    }
    res.end()
})
server.listen(5000);
console.log('Server work on 5000 port');