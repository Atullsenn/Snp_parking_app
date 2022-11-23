const db = require("../../db/conn");
// const auth= require("../../middleware/auth")
const adddnotifications = (request, res) => {
    db.query(`INSERT INTO notificationas  (user_id,description,title)
    VALUES ('${request.body.user_id}','${request.body.description}', '${request.body.title}');`,(err,data)=>{
      if (err) {
        console.log("testing")
        res.status(500).send({message:err});
        return;
      }
      else{
        res.status(200).send({
            data:data
        })

      }
})
}

module.exports = adddnotifications;
