
const {db_update_fastpay_booking} = require("../models/db_action_fastpay_model");

exports.action_datafeed = (req, res) => {

db_update_fastpay_booking(req.query, function (err, data) { 
res.send("OK")    
})

}

