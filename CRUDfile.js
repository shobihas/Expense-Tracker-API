const fs=require("fs")

const fs =require('fs');
const create=(student)=>{
    let students=[]
    fs.readFile('./student.json','utf8',(err,data)=>{
        let ac=data? JSON.parse(data) : [];
        if(ac.length>0){
            students=[...ac,student]
        } else {
            students=[student]
        }
        fs.writeFile('./student.json',JSON.stringify(students),(err)=>{
            if(err){
                console.log("Error")
            }
            console.log("Data is added")
        });
    })
}
function read(){
    fs.readFile('./student.json','utf8',(err,data)=>{
        if(err){
            console.log("Cannot open the file");
            return 
        }
        console.log(data)
    });
}
function update(){
    fs.readFile('./student.json','utf8',(err,data)=>{
        if(err){
            console.log("Cannot open the file");
            return
            }
            let obj=JSON.parse(data);
            obj.name="Hudson";
            obj.roll=1;
            obj.age=19;
            fs.writeFile("./student.json",JSON.stringify(obj),(err)=>{
})})}
read();