import { readFile } from 'node:fs';

readFile('./files/files.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
console.log("hiiiiiiiiiii")
// there  was an uncaught error
process.on('uncaughtException',err=>{
  console.error(`there was an uncaught error in this program:${err}`)
  process.exit(1);
})