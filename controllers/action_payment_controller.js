const {
    db_request_update_payment_n23
    , db_response_update_payment_n23
} = require("../models/db_action_n23_approval_payment_model");

const {
    db_request_update_payment_n24
    , db_response_update_payment_n24
} = require("../models/db_action_n24_approval_payment_model");

const util_fun = require("../utils/util_fun");
const code_error = require("../utils/code_error");
const util_res_error = require("../utils/util_res_error");

exports.action_payment = (req, res) => {



    switch (req.body.comCode) {
        case "911208":
            db_request_update_payment_n23(req.body, async function (err, data) {
                if (data == null) {
                    res.send(util_res_error.json_error_payment(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
                } else {
                    let data_res = await util_fun.mergObjectPayment(req.body);
                    res.send(data_res)

                    db_response_update_payment_n23(req.body, data_res, function (err, data) {

                    })
                }


            })



            break;
        case "911209":
            db_request_update_payment_n24(req.body, async function (err, data) {
                if (data == null) {
                    res.send(util_res_error.json_error_payment(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
                } else {
                    let data_res = await util_fun.mergObjectPayment(req.body);
                    res.send(data_res)

                    db_response_update_payment_n24(req.body, data_res, function (err, data) {

                    })
                }


            })


            break;
        default:
            res.send(util_res_error.json_error_payment(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
            break;
    }


}




