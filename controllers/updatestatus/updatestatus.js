const db = require("../../db/conn");
const updatestatus= async (req, res) => {
    db.query('UPDATE users SET status="' + req.body.status + '"  WHERE id = "' + req.body.id + '"', (err, data) => {
        if (err) {
            console.log(err);
            res.status(502).send({message:"unable to update  the status of the user"})
        }
        else {   
        res.status(200).send({ message: "status is updated" })
        }
    })
}
module.exports= updatestatus;
