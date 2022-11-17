var mysql = require("mysql")



const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"parking_app_database"
    
})
connection.connect((error)=>{
if(error){
    console.log(error)
}else{
    console.log("connected successfully.........");
}
    
})

module.exports= connection;
