

const {
    db_update_fastpay_booking_fail,
    db_update_fastpay_booking_cancel,
    db_fastpay_newmenber_cancel,
    db_fastpay_newmenber_fail,
    db_fastpay_renewmenber_fail,
    db_fastpay_renewmenber_cancel

} = require("../models/db_action_fastpay_model");


exports.check_status_successcode = (req, res, next) => {


    let txt_orderRef1 = req.body.orderRef1.substring(0, 2);
    switch (req.body.successcode) {
        case "0":
            if (txt_orderRef1 === "BK") {
                next()
            } else if (txt_orderRef1 === "NM") {
                next()
            } else if (txt_orderRef1 === "RM") {
                next()
            } else {
                res.send("OK")
            }
            break;

        case "1":
            if (txt_orderRef1 === "BK") {
                db_update_fastpay_booking_fail(req.body, function (err, data) {
                    res.send("OK")
                })
            } else if (txt_orderRef1 === "NM") {

                db_fastpay_newmenber_fail(req.body, function (err, data) {
                    res.send("OK")
                })

            } else if (txt_orderRef1 === "RM") {                

                db_fastpay_renewmenber_fail(req.body, function (err, data) {
                    res.send("OK")
                })

            } else {
                res.send("OK")
            }

            break;
        case "2":
            if (txt_orderRef1 === "BK") {
                db_update_fastpay_booking_cancel(req.body, function (err, data) {
                    res.send("OK")
                })

            } else if (txt_orderRef1 === "NM") {
                db_fastpay_newmenber_cancel(req.body, function (err, data) {
                    res.send("OK")
                })


            } else if (txt_orderRef1 === "RM") {
                
                db_fastpay_renewmenber_cancel(req.body, function (err, data) {
                    res.send("OK")
                })

            } else {
                res.send("OK")
            }

            break;

        default:
            res.send("OK")
            break;
    }

}

