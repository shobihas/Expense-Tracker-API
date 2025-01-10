const http=require('http');//http is a built-in module in Node.js
const fs = require('fs');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/json'});
    //write the data from file.js in the response
    fs.readFile('./sample.json','utf8',(err,data)=>{
        if(err){
            console.log("Cannot open the file");
            return;
        }
        res.write(data);
        res.end();
});
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


// console.log(modules.add(2,3));//abstraction is applied because we only know that add is a function and we dont know how it is implemented
// //encapsulation is applied beacuse because the function and data varaiables are wrraped in a single unit
// console.log(modules.sub(2,3));
// console.log(modules.mul(2,3));
// console.log(modules.div(9,3));



