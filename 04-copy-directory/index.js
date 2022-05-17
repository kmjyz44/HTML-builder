const fs = require('fs');
const path = require('path');



async function mdir (){
    try{
  await fs.mkdir(path.join(__dirname, 'files-copy'),{ recursive: true }, err => {
    if (err) throw err;
})   
}
   catch(e){
       console.log(e);
   }
}
mdir ();
async function readd (){
    try {
    await fs.readdir (path.join(__dirname,'files'),(err,files)=>{
        if(err)
        console.log(err);
            
    files.forEach(element => {
    
          
         fs.copyFile((path.join(__dirname,'files',element)), (path.join(__dirname,'files-copy',element)), err => {
        if(err) throw err; // не удалось скопировать файл
        console.log('Файл успешно скопирован');
    })
            })
        })
    }catch(e){
        console.log(e);
        }
    
    }
    
    readd ();
   

       
