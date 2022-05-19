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
                                     console.log (endHtml);  
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
