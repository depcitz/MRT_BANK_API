
const {
    db_update_fastpay_booking,
    db_fastpay_newmenber,
    db_fastpay_renewmenber
} = require("../models/db_action_fastpay_model");

exports.action_datafeed = (req, res) => {
     let txt_orderRef1 = req.body.orderRef1.substring(0, 2);

    switch (txt_orderRef1) {
        case "BK":
            db_update_fastpay_booking(req.body, function (err, data) {
                res.send("OK")
            })
            break;

        case "NM":
            db_fastpay_newmenber(req.body, function (err, data) {
                res.send("OK")
            })
            break;

        case "RM":
            db_fastpay_renewmenber(req.body, function (err, data) {
                res.send("OK")
            })
            break;

        default:
            res.send("OK")
            break;
    }




}

