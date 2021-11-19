import fs from 'fs'
fs.unlink('vinayak.txt',(err)=>{
    if(err) throw err;
    console.log("File delete successfully");
})