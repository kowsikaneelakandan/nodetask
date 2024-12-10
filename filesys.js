const filesys=require('node:fs');
const {currentdate}=require('./date')

function folder(){
filesys.mkdir("./first",(err)=>{
    console.log(err)
})
}

function createfile(){
    filesys.appendFileSync("./first/date-time.txt","current date and time"+currentdate(),{
        encoding:'utf8'
    })
}

module.exports= {
    folder,
    createfile
}