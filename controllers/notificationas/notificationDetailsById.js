const db = require('../../db/conn');

const notificationDetailsById = (req,res)=>{
    db.query('SELECT a.*, b.first_name, b.last_name, b.id FROM notificationas a LEFT JOIN users b ON a.user_id = b.id OR a.user_id = 0   WHERE a.id = "'+req.body.id+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: 'false',
                message: err
            })
        }

        else{
            res.status(200).send({
                success: 'true',
                data:data
            })
        }
    })
}


module.exports = notificationDetailsById;