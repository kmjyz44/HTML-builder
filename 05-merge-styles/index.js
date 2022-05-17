const await = require('await');
const fs = require('fs');
const path = require('path');

async function readd (){
    try {
    await fs.readdir (path.join(__dirname,'styles'),(err,files)=>{
        if(err)
        console.log(err);
        else{
            
            files.forEach(element => {
                           if(path.extname(element)=='.css'){
                            async function stream (){
                            const readableStream = await fs.ReadStream((path.join(__dirname,'styles',element)));
                              
                             readableStream.on('data', chunk => {
                                
                                const output = fs.appendFile('bundle.css',chunk, (err)=>{
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
