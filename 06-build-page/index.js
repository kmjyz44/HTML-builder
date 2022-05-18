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
 let Htmltem =[];   
const readableStream = await fs.ReadStream((path.join(__dirname,'template.html')));
                              
                             readableStream.on('data', chunk => {
                                 
                                async function pushHtmltem (err){
                                    await Htmltem.push (chunk);
                                  if(err){
                                      console.log(err);
                                  }
                                }
                               // const output = fs.appendFile('bundle.css',chunk, (err)=>{
                                //if(err) throw err 
                                //})
                                pushHtmltem ();
                                for(tem of Htmltem){
                                   if(tem == 'header'){ 
                                console.log(tem.toString());
                                   }
                                }
                                })
                                
                            readableStream.on('error', error => console.log('error'));
                            
                        } 

mdir ();
readHtmltem ()
