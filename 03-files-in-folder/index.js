var fs = require('fs');
var path = require('path');

    
   let files = fs.readdirSync('C:/Git/HTML-builder/03-files-in-folder/secret-folder');
        files.forEach(element => {
           
           fs.stat("C:/Git/HTML-builder/03-files-in-folder/secret-folder/"+element,function(err,stats){
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

        
