const db = require("../../db/conn");



const getNotificationas= async(req,res)=>{
    db.query("SELECT a.*, b.first_name, b.last_name FROM notificationas a LEFT JOIN users b ON a.user_id = b.id OR a.user_id = 0 ",(err,data)=>{
        if(err){
            res.status(500).send({message:err})
        }else{
            res.status(200).send({message:data})
        }
    })
}
module.exports= getNotificationas;