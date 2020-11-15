const {
    db_insert_qrcode_transaction_n24
    , db_action_cancel_qrcode_n24
    , db_action_checkpay_qrcode_n24 } = require("../models/db_action_n24_qrcode_model");
const config_qrdata = require("../config/qrdata_n23");
const util_fun = require("../utils/util_fun");
const format = require('response-format');

exports.action_add_qrcode = async (req, res) => {



    let obj_ref2 = await util_fun.genref2(req.body)
    let object_reuslt = await util_fun.mergObjectToQRCode(req.body, config_qrdata, obj_ref2)


    db_insert_qrcode_transaction_n24(req.body, object_reuslt, obj_ref2, function (err, data) {
        if (data === null) {
            let data_res_error = format.create('200', true, null, "db_insert_qrcode_transaction_n23_fail")
            res.send(data_res_error)

        } else {
            let data_res = format.create('200', false, "success", data)
            res.send(data_res)
        }
    })
}




exports.action_cancel_qrcode = (req, res) => {

    db_action_cancel_qrcode_n24(req.body, function (err, data) {
        if (data === null) {
            let data_res_error = format.create('200', true, "db_action_cancel_qrcode_n23_fail", null)
            res.send(data_res_error)

        } else {
            let data_res = format.create('200', false, "success", "success")
            res.send(data_res)
        }
    })


}


exports.action_checkpay_qrcode = (req, res) => {


    db_action_checkpay_qrcode_n24(req.body, function (err, data) {

        if (data === null) {
            let data_res_error = format.create('200', true, "db_action_check_qrcode_n24_fail", null)
            res.send(data_res_error)

        } else {
            let data_res = format.create('200', false, "checkpay_success", data)
            res.send(data_res)
        }
    })


}
