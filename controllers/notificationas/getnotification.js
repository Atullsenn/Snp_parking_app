const db = require("../../db/conn");



const getNotificationas= async(req,res)=>{
    db.query("SELECT * FROM notificationas",(err,data)=>{
        if(err){
            res.status(502).send({message:"error occurs"})
        }else{
            res.status(201).send({message:data})
        }
    })
}
module.exports= getNotificationas;