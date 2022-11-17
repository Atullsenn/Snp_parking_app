const db = require("../../db/conn");
const getallcustomers=  async (req, res) => {
    try {
        db.query("SELECT id,first_name,last_name,phone,email,image FROM users", (error, data) => {
            if (error) {
                res.status(502).send({message:"unable to load the data from the server"})
            } else {
                res.status(200).send({ message:data})
            }
        })
    } catch (error) {
        res. status(400).send({message:"error occurs"})
    }   
}
module.exports= getallcustomers;
