const { response } = require("express");
const db = require("../../db/conn");
const addparking= async (req, res) => {
    const arr2 = []
    // if(req.body.parking_name == '' || req.body.parking_name == null){
    //      res.status(400).send({
    //         success: false,
    //         message: 'Please Enter parking Name'
    //     })
    //     return;
    // }
    // if(req.body.capacity == '' || req.body.capacity == null){
    //      res.status(400).send({
    //         success: false,
    //         message: 'Please Enter Capacity'
    //     })
    //     return;
    // }
    // if(req.body.no_of_days == '' || req.body.no_of_days == null){
    //      res.status(400).send({
    //         success: false,
    //         message: 'Please Enter No Of Days'
    //     })
    //     return;
    // }
    // if(req.body.veichle_type_two_wheeler == '' || req.body.veichle_type_two_wheeler == null){
    //      res.status(400).send({
    //         success: false,
    //         message: 'Please Enter Vehicle Type'
    //     })
    //     return;
    // }
    // if(req.body.veichle_type_four_wheeler == '' || req.body.veichle_type_four_wheeler == null){
    //     res.status(400).send({
    //         success: false,
    //         message: 'Please Enter Vehicle Type '
    //     })
    //     return;
    // }
    

    // if(req.body.location_id == '' || req.body.location_id == null){
    //     res.status(400).send({
    //         success: false,
    //         message: 'Please Enter Location'
    //     })
    //     return;
    // }
    db.query(`INSERT INTO table_add_parking (parking_name,location_id,capacity,no_of_days,veichle_type_two_wheeler,veichle_type_four_wheeler,two_wheeler_per_hour_charge,two_wheeler_per_day_charge,two_wheeler_per_week_charge,two_wheeler_per_month_charge,four_wheeler_per_hour_charge,four_wheeler_per_day_Charge,four_wheeler_per_week_charge,four_wheeler_per_month_charge)
    VALUES('${req.body.parking_name}','${req.body.location_id}','${req.body.capacity}', '${req.body.no_of_days}', '${req.body.veichle_type_two_wheeler}', '${req.body.veichle_type_four_wheeler}','${req.body.two_wheeler_per_hour_charge}', '${req.body.two_wheeler_per_day_charge}','${req.body.two_wheeler_per_week_charge}','${req.body.two_wheeler_per_month_charge}', '${req.body.four_wheeler_per_hour_charge}', '${req.body.four_wheeler_per_day_charge}', '${req.body.four_wheeler_per_week_charge}', '${req.body.four_wheeler_per_month_charge}');`,(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
            return;
        }
        else{
            // const lastInsertedID = data.insertId;
            // console.log(lastInsertedID)


            // db.query('SELECT veichle_type_two_wheeler,veichle_type_four_wheeler FROM table_add_parking WHERE id = "'+lastInsertedID+'"',(errRes, respNext)=>{
            //     respNext?.forEach(element => {
            //         const arr1 = {}
            //         arr1['vehicle_type1'] = element.veichle_type_two_wheeler
            //         arr1['vehicle_type2'] = element.veichle_type_four_wheeler 
            //         arr2.push(arr1)
            //         console.log(arr2[0].vehicle_type2)
            //         console.log(arr2[0].vehicle_type1)
            //         db.query(`INSERT INTO table_vehicle_type  (parking_id,vehicle_type,per_hour_charge,per_day_charge,per_week_charge,per_month_charge)
            //         VALUES ('${lastInsertedID}','${arr2[0].vehicle_type1}','${req.body.per_hour_charge}', '${req.body.per_day_charge}', '${req.body.per_week_charge}', '${req.body.per_month_charge}');`,(inErr,inResp)=>{
            //           if(inErr){
            //             console.log('error')
                       
            //           }
            //           if(inResp){
            //             console.log("success!")
                       
                    
            //           }
                   
            //         });
            //         db.query(`INSERT INTO table_vehicle_type  (parking_id,vehicle_type,per_hour_charge,per_day_charge,per_week_charge,per_month_charge)
            //         VALUES ('${lastInsertedID}','${arr2[0].vehicle_type2}','${fourWheelerPerHourCharge}', '${fourWheelerPerDayCharge}', '${fourWheelerPerWeekCharge}', '${fourWheelerPerMonthCharge}');`,(inErr,inResp)=>{
            //           if(inErr){
            //             console.log('error')
                        
            //           }
            //           if(inResp){
            //             console.log("success!")
                       
            //           }
                   
            //         });
        
            //       });
            // })






            res.status(200).send({
                success: true,
                message: 'Parking Added Successfully',
                data: data
            })
            return;
        }
    })
}
module.exports= addparking;


//p-  stripepayment@12df
