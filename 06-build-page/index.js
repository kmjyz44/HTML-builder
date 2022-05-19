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
 const readHeder = await fs.ReadStream((path.join(__dirname, 'components','header.html')),'utf-8');
 readHeder.on('data', hchunk => head = hchunk);

 const readArticl = await fs.ReadStream((path.join(__dirname, 'components','articles.html')),'utf-8');
 readHeder.on('data', hchunk => articl = hchunk);
 console.log(articl);

const readableStream = await fs.ReadStream((path.join(__dirname,'template.html')),'utf-8');
                              
                             readableStream.on('data', chunk => {
                                 
                                   function pushHtmltem (err){
                                    let ht =  chunk.replace('{{header}}', head);
                                     ht =  chunk.replace('{{articles}}', articl);
                                      // let Htm =(ht.split('\n'));
                                     //console.log (ht);  
                                  if(err){
                                      console.log(err);
                                  }
                                }
                               // const output = fs.appendFile('bundle.css',chunk, (err)=>{
                                //if(err) throw err 
                                //})
                                pushHtmltem ();
                                
                            })
                            
                            readableStream.on('error', error => console.log('error'));
                            
                        } 
                        
mdir ();
readHtmltem ()
