
const fs = require('fs');
const path = require('path');

async function mdir (){
  try{
    await fs.promises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
      if (err)
        throw err;
    });   
  }
  catch(e){
    console.log(e);
  }
}
async function delfiles(){
  let fc = await fs.promises.readdir (path.join(__dirname,'files-copy'));
  for(let fd of fc){
    if(path.extname(path.join(__dirname,'files',fd))){
      await fs.promises.unlink(path.join(__dirname,'files-copy',fd));
    }
    else{
      await fs.promises.rmdir (path.join(__dirname,'files-copy', fd));
    }
  }
}
async function readd(){
  const files = await fs.promises.readdir (path.join(__dirname,'files'));  
  for(let element of files){ 
    if(path.extname(path.join(__dirname,'files',element))){
      fs.promises.copyFile((path.join(__dirname,'files',element)), (path.join(__dirname,'files-copy',element))).then (function (err) {
        if(err) throw err; // не удалось скопировать файл
        console.log('Файл успешно скопирован');

      });
    }
    else{
      console.log(element);
     
      fs.mkdir(path.join(__dirname,'files-copy', element), { recursive: true }, err => {
        if (err)
          throw err;
      });   
    }  
  }
}

async function rune (){
  await delfiles();
  await mdir ();
  await readd();
}  
rune();
 
