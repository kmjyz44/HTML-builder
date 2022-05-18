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
const readableStream = await fs.ReadStream((path.join(__dirname,'template.html')),'utf-8');
                              
                             readableStream.on('data', chunk => {
                                 
                                   function pushHtmltem (err){
                                       let Htm =(chunk.split('\n'));
                                    for(let i= 0 ; i<Htm.length;i++){
                                      Htmltem.push(Htm[i]);
                                       
                                   }
                                    
                                  if(err){
                                      console.log(err);
                                  }
                                }
                               // const output = fs.appendFile('bundle.css',chunk, (err)=>{
                                //if(err) throw err 
                                //})
                                pushHtmltem ();
                               // let Ht = Htmltem.replace(/\s/g, '');;
                               console.log(Htmltem);
                                for(let i =0; i<Htmltem.length;i++){
                                  if(Htmltem[i]=='    {{header}}'){
                                console.log(Htmltem[17])
                                  }
                                }
                            })
                            
                            readableStream.on('error', error => console.log('error'));
                            
                        } 

mdir ();
readHtmltem ()
