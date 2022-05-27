
var fs = require('fs');
var path = require('path');

async function rd (){
  await fs.readdir((path.join(__dirname, 'secret-folder')), (err,files) =>{
    files.forEach(element => {
      fs.stat(path.join(__dirname, 'secret-folder', element), function(err,stats){
        if(err){
          console.log(err);
        }
        if(!stats.isDirectory()){
          console.log(path.basename(element, path.extname(element))+' - '+ path.extname(element)+' - '+stats.size);
        }
        else{
          console.log(element+'  - Не является файлом');
        }
      });
            
    });    
  });
}  
async function rune (){
  await rd();

}
rune();