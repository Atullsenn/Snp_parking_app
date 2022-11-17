
const db = require("../../db/conn");
const changePasswordAdmin = async (req, res) => {
    const oldpassword = req.body.oldpassword;
    const newpassword = req.body.newpassword;
    const confirmnewpassword = req.body.confirmnewpassword;

    if (!oldpassword) {
        res.send({ message: "please enter the oldpassword" })
    } else {
        if (newpassword == confirmnewpassword) {
            var dbpassword;
            db.query("SELECT * FROM admin ", (err, data) => {
                if (err) {
                    res.send({ message: "err occurs " })
                } else {
                    dbpassword = data[0].password;
                    console.log(dbpassword);
                    if (dbpassword == oldpassword) {
                        db.query('UPDATE admin SET password ="' + req.body.newpassword + '" WHERE id =1', (error, data) => {
                            if (error) {
                                res.send({ message: "error occured" })
                            } else {
                                console.log(data)
                                res.send({ message: "password is updated" })

                            }
                        })

                    } else {
                        res.send({ message: "passsword is not updated" })
                    }
                }
            })
        }else{
            res.send({message:"password is not matched"})
        }
    }
}






module.exports = changePasswordAdmin;