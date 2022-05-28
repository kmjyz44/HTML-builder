
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
    await fs.promises.unlink(path.join(__dirname,'files-copy',fd));
    console.log(fd);
  }
}
async function readd(){
  const files = await fs.promises.readdir (path.join(__dirname,'files'));  
  for(let element of files){     
    fs.promises.copyFile((path.join(__dirname,'files',element)), (path.join(__dirname,'files-copy',element))).then (function (err) {
      if(err) throw err; // не удалось скопировать файл
      console.log('Файл успешно скопирован');

    });
  }
}

async function rune (){
  await delfiles();
  await mdir ();
  await readd();
}  
rune();
 
