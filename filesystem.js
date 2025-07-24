//const fs=require('fs')
//const path=require("path")
// fs.readfile program-----------

//fs.readFile(path.join(__dirname,'files','files.txt'),'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
 // }); 

 //fs.writefile program-----------//////////////////
//fs.writeFile(path.join(__dirname,'files','files.txt'),'hi guys', (err) => {
    
    //if (err) throw err;

    const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'files', 'files.txt'), 'hi guys heloo', (err) => {
    if (err) throw err;
 
});
    
/* fs.appendfile program-----------//////////////////
fs.appendFile(path.join(__dirname,'files','files.txt'),'\n\n hi guys play football', (err) => {
    
    if (err) throw err;
    console.log(" append complete");
  }); 
  // fs.appendfile rename a new program-----------//////////////////
fs.rename(path.join(__dirname,'files','files.txt'), path.join(__dirname,'files','rename.txt'), (err) => {
    
    if (err) throw err;
    console.log(" rename complete");
  });    

  // there  was an uncaught error
process.on('uncaughtException',err=>{
    console.error(`there was an uncaught error in this program:${err}`)
    process.exit(1);
  })*/