const db = require("../../db/conn");
const addparking= async (req, res) => {
    try {
        var { parking_name, location_id, capacity, no_of_days, veichle_type_four_wheeler, veichle_type_two_wheeler, veichle_type_four_wheeler_rent, veichle_type_two_wheeler_rent } = req.body;
        if (!parking_name || !location_id || !capacity || !no_of_days) {
            res.send({ message: "please enter the details" })
        } else {
            if (veichle_type_four_wheeler === null) {
                veichle_type_four_wheeler_rent === 0
            } if (veichle_type_two_wheeler === null) {
                veichle_type_two_wheeler_rent = 0
            } else {
                veichle_type_four_wheeler = req.body.veichle_type_four_wheeler;
                veichle_type_four_wheeler_rent = req.body.veichle_type_four_wheeler_rent;
                veichle_type_two_wheeler = req.body.veichle_type_two_wheeler;
                veichle_type_two_wheeler_rent = req.body.veichle_type_two_wheeler_rent
            }
            db.query('INSERT INTO table_add_parking SET ?', { parking_name: parking_name, location_id: location_id, capacity: req.body.capacity, no_of_days: req.body.no_of_days, veichle_type_two_wheeler: veichle_type_two_wheeler, veichle_type_four_wheeler: veichle_type_four_wheeler, veichle_type_two_wheeler_rent: veichle_type_two_wheeler_rent, veichle_type_four_wheeler_rent: veichle_type_four_wheeler_rent }, (err, data) => {
                if (err) {
                    res.send({ message: err.message })
                } else {
                    res.send({ message: "data is inserted" })
                }
            })
        }
    } catch (error) {
        res.send({ message: "location is not inserted" })
    }
};
module.exports= addparking;
