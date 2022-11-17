const db = require("../../db/conn");
const bcrypt = require("bcryptjs");
const registration = async (req, res) => {
    try {
        var { first_name, last_name, email, phone, password, cpassword } = req.body;
        if (!first_name || !last_name || !email || !phone || !password) {
            res.status(400).send({ message: "please enter the valid details" })
        } else if (cpassword !== password) {
            res.status(400).send({ message: "please enter the valid passwrd" })
        } else {
            db.query('SELECT email FROM users WHERE email=?', [email], async function (err, data) {
                if (err) {
                    res.status(502).send({message:"unable to load the account from the registered email"})
                }
                if (data.length > 0) {
                    res.status(401).send("email is exist")
                } else {
                    const hashedpassword = await bcrypt.hash(password, 8);
                    password = hashedpassword;
                    db.query('INSERT INTO users SET ?', { first_name: first_name, last_name: last_name, email: email, phone: phone, password: hashedpassword },
                        function (err, data) {
                            if (err) {
                                console.log(err)
                                res.status(502).send({ message: "uanable to insert the data in databse" })
                            } else {
                                db.query('SELECT * FROM  users WHERE email=  "' + req.body.email + '"', (err, data) => {
                                    if (err) {
                                        res.status(502).send("error durning the fetch of data")
                                    } else { if(data[0]==null){
                                        res.send({message:"no data is found"})
                                    }else{
                                        res.status(200).send({message:data})
                                    }
                                        
                                    }
                                })
                            }
                        }
                    )
                }
            })
        }

    }
    catch (error) {
        res.status(500).send({ message: "internal error" })
    }
}
module.exports = registration;
