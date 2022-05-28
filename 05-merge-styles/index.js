
//const { error } = require('console');
const fs = require('fs');
const path = require('path');

async function readd (){
  let files = await fs.promises.readdir (path.join(__dirname,'styles'));
  for(let element of files){
    if(path.extname(element)=='.css'){
      const readableStream = await fs.ReadStream((path.join(__dirname,'styles',element)));                    
      readableStream.on('data', chunk => {                    
        fs.promises.appendFile('bundle.css',chunk, (err)=>{
          if(err) throw err; 
        });
                                
        //readableStream.on('error', error => console.log('error'));
      });           
    }   
                           
  }         
} 
async function run (){
  await readd();
}
run();