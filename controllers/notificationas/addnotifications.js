const db = require("../../db/conn");
// const auth= require("../../middleware/auth")
const adddnotifications = async (req, res) => {
    var { user_id, title,message, status } = req.body;
    if (!user_id || !title || !status||!message) {
        res.status(400).send({ message: "please enter the mendatory field" })
    } else {
        const date = new Date
        const dateformat = date.toDateString()
        db.query('INSERT INTO notificationas SET ?',{user_id:req.body.user_id,description:req.body.message,title:req.body.title,date:dateformat,status:req.body.status} ,(error,data)=>{
            if(error){
                res.status(502).status({message:"unable to add notifications"})
            }else{
                res.status(200).send({message:"data is inserted into the database"})
            }
        })
    }
}
module.exports = adddnotifications;
