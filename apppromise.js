const fspromises=require('fs').promises
const path=require('path');
const fs=require('fs')

const fileOps= async () =>{
    try{
        const data= await fs.readFile(path.join(__dirname,'./files','./files.txt1'),'utf8', async (err, data) => {
        console.log(data);

       await fs.promises.writeFile(path.join(__dirname,'./files','./files.txt1'),'hi guys i am stewaugh', async (err) => {
        console.log(data);
            console.log("write complete");
        
        await fs.promises.appendFile(path.join(__dirname,'./files','./files.txt1'),'\n\n hi guys play football', (err) => {
          console.log(data);
              console.log(" append complete");
          }); 
          }); 
          }); 
          
    }catch(err){
    console.error(err)
  }
}
fileOps()

