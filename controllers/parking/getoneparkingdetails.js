const db = require("../../db/conn");
const getoneparkingdetails= async (req, res) => {
    // const id = req.body.id;
    // if (!id) {
    //     res.send({ message: "please enter the details of parking" })
    // } else {
        db.query("SELECT * FROM  table_add_parking WHERE id=  '" + req.body.id + "'", (error, data) => {
            if (error) {
                res.status(500).send({
                    message: error
                })
            } 
            else{
                res.status(200).send({data: data })
            }
                
            }
        )
    //}
}
module.exports= getoneparkingdetails;
