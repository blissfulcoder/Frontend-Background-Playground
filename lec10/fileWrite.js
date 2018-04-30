const fs = require("fs")

fs.writeFile(__dirname+"/write.txt","This is some text",
function () {
    console.info("Task finished")
})

fs.readFile(__dirname+"/write.txt",(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
}) /,p