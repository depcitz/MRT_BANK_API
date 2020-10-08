const {
    db_request_update_approval_n23
    , db_response_update_approval_n23
    , db_request_update_payment_n23
    , db_response_update_payment_n23
} = require("../models/db_action_n23_approval_payment_model");
const util_fun = require("../utils/util_fun");
const code_error = require("../utils/code_error");
const util_res_error = require("../utils/util_res_error");

exports.action_approval = (req, res) => {

    db_request_update_approval_n23(req.body, async function (err, data) {
        //console.log(data)
        if (data == null) {
            res.send(util_res_error.json_error_approval(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
        }else{
            let data_res = await util_fun.mergObjectApproval(req.body, data);
            res.send(data_res)      
            db_response_update_approval_n23(req.body, data_res, function (err, data) {
    
    
            })
        }
       

    })
}



exports.action_payment = (req, res) => {

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





}



