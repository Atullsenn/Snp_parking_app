const db= require("../../../db/conn");

const allbooking= async(req,res)=>{
    try {
         db.query('SELECT * FROM book_parking',(err,data)=>{
            if(err){
                res.status(502).send({message:"error occurs"})
            }else{
                res.status(201).send({message:data})
            }
         })
    } catch (error) {
        res.status(400).send({message:"error occures"})
        
    }
}
module.exports= allbooking;
