const db = require("../../db/conn");
const getparking= async (req, res) => {
    try {
        db.query("SELECT * FROM table_add_parking", (error, data) => {
            if (error) {
                res.send({ message: "no data is found" })
            } else {
                res.send({ message:data })
            }
        })
    } catch (error) {
        res.send({ message: "internal server error occured " })
    }
}
module.exports= getparking;
