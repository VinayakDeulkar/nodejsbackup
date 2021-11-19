import fs from 'fs'
fs.writeFile('vinayak.txt','hello how r u ',(err)=>{
    if(err) throw err;
    console.log("File write successfully");
})
fs.appendFile('vinayak.txt','What are u doing ',(err)=>{
    if(err) throw err;
    console.log("File write successfully");
})