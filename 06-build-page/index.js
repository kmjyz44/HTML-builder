const await = require('await');
const fs = require('fs');
const path = require('path');

async function mdir (){
    try{
  await fs.mkdir(path.join(__dirname, 'project-dist'),{ recursive: true }, err => {
    if (err) throw err;
})   
}
   catch(e){
       console.log(e);
   }
}

async function readHtmltem (){
 let articl ='';  
 let head='' ;
 let foot ='';
 const readHeder = await fs.ReadStream((path.join(__dirname, 'components','header.html')),'utf-8');
 readHeder.on('data', hchunk => head = hchunk);

 const readArticl = await fs.ReadStream((path.join(__dirname, 'components','articles.html')),'utf-8');
 readArticl.on('data', achunk => articl = achunk);

 const readFooter = await fs.ReadStream((path.join(__dirname, 'components','footer.html')),'utf-8');
 readFooter.on('data', fchunk => foot = fchunk);
 

const readableStream = await fs.ReadStream((path.join(__dirname,'template.html')),'utf-8');
                              
                             readableStream.on('data', chunk => {
                                 
                                   function pushHtmltem (err){
                                    let ht =  chunk.replace('{{header}}', head);
                                    let artht =  ht.replace('{{articles}}', articl);
                                    let endHtml = artht.replace('{{footer}}', foot);

                                    fs.open(path.join(__dirname,'project-dist','index.html'), 'w', (err) => {
                                        if(err) throw err;
                
                                    });
                                    const output = fs.appendFile(path.join(__dirname,'project-dist','index.html'),endHtml, (err)=>{
                                        if(err) throw err 
                                        })
                                      if(err){
                                      console.log(err);
                                  }
                                }
                               
                                pushHtmltem ();
                                
                            })
                            
                            readableStream.on('error', error => console.log('error'));
                            
                        } 
                        
mdir ();
readHtmltem ()



async function readd (){
    try {
     fs.readdir (path.join(__dirname,'styles'),(err,files)=>{
        if(err)
        console.log(err);
        else{
            
            files.forEach(element => {
                           if(path.extname(element)=='.css'){
                            async function stream (){
                            const readableStream = await fs.ReadStream((path.join(__dirname,'styles',element)));
                              
                             readableStream.on('data', chunk => {
                                
                                const output = fs.appendFile(path.join(__dirname, 'project-dist','style.css'),chunk, (err)=>{
                                if(err) throw err 
                                })
                                 
                                })
                                
                            readableStream.on('error', error => console.log('error'));
                            
                        } 
                        stream ();     
                               
                        }          
            });
        
           
        }
    })
   
}
    catch(e){
        console.log(e)
    }
}
readd();

//copy assets //


async function mdir (){
    try{
  await fs.mkdir(path.join(__dirname,'project-dist', 'assets'),{ recursive: true }, err => {
    if (err) throw err;
})   
}
   catch(e){
       console.log(e);
   }
}

async function readDir (){
    try {
    await fs.readdir (path.join(__dirname,'assets'),(err,files)=>{
console.log(files);
        if(err)
        console.log(err);
files.forEach(element => {
fs.readdir (path.join(__dirname,'assets', element),(err,file)=>{
       if(err)
         console.log(err); 
      
   
       fs.mkdir(path.join(__dirname,'project-dist', 'assets', element),{ recursive: true }, err => {
             if (err) throw err;
         }) 
           
    
     file.forEach(elements => {   
   console.log(elements);
     fs.copyFile((path.join(__dirname,'assets',element,elements)), (path.join(__dirname, 'project-dist','assets',element,elements)), err => {
        if(err) throw err; // не удалось скопировать файл
        console.log('Файл успешно скопирован');
    })
           })
        }) 
})
})
    }catch(e){
        console.log(e);
        }
    
    }
    mdir ();
    readDir ();