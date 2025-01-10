const fs=require("fs");
fs.readFile('./sample.json','utf8',(err,data)=>{
    if(err){
        console.log("Cannot open the file");
        return 
    }
    const user=JSON.parse(data)
    const filteredData=user.filter((x)=>x.amount>1500)
    console.log(filteredData)
    fs.writeFile("./sample2.json",JSON.stringify(filteredData),(err)=>{
        if(err){
            console.log("Cannot write to the file");
            return err;
        }
        console.log("Data written to the file");
    });
});
