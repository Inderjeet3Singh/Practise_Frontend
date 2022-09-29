 var http = require('http')
 var fs = require('fs')

 http.createServer(function(req,res){

    if(req.url=="/"){
    
        fs.readFile('./home.html', (err, data) => {
            if (err) throw err;
          //  console.log("Baba");
            res.write(data);
            res.end();
        });
        


    }else if(req.url=="/user"){
        fs.readFile('./user.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }



    
 }).listen(5050, ()=> console.log("running"))