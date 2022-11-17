const db = require("../../db/conn");
const deleteparking= async(req,res)=>{
    const parkingid= req.body.id;
    const key= req.body.key;
    
    if(!parkingid){
        res.send({message:"please provide the parking id"})
    }else{
        if(key==2){
            db.query('SELECT * FROM table_add_parking WHERE id= "'+req.body.id+'"',(error,data)=>{
                if(error){
                    res.send({message:"error occurs"})
                }else{
                    console.log(data);
                    res.send({message:data});
                }
            })
        }else{ if(key==3){
            res.send({message:"table is deleted"})
        }
        }
            
       
    }
}

module.exports= deleteparking;
