const db = require("../../db/conn");
const getoneparkingdetails= async (req, res) => {
    const id = req.body.id;
    if (!id) {
        res.send({ message: "please enter the details of parking" })
    } else {
        db.query("SELECT * FROM  table_add_parking WHERE id=  '" + req.body.id + "'", (error, data) => {
            if (error) {
                res.send({
                    message: "unable to fetch the data"
                })
            } else { if(data[0]==null){
                res.status(502).send({message:"data is not found"})
            }else{
                res.send({ message: data })
            }
                
            }
        })
    }
}
module.exports= getoneparkingdetails;
