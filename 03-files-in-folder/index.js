var fs = require('fs');
var path = require('path');

    
   let files = fs.readdirSync(path.join(__dirname, 'secret-folder'));
        files.forEach(element => {
           
           fs.stat(path.join(__dirname, 'secret-folder', element), function(err,stats){
           if(err){
            console.log(err);
           }
           if(!stats.isDirectory()){
           console.log(path.basename(element, path.extname(element))+' - '+ path.extname(element)+' - '+stats.size);
            }
            else{
                console.log(element+'  - Не является файлом')
            }
             })
            
            });    

        
