const { 
db_insert_qrcode_transaction_n23 
,db_action_cancel_qrcode_n23
,db_action_checkpay_qrcode_n23
} = require("../models/db_action_n23_qrcode_model");
const config_qrdata = require("../config/qrdata_n23");
const util_fun = require("../utils/util_fun");
const format = require('response-format');

 exports.action_add_qrcode = async (req, res) => {

//const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

let obj_ref2 =  await  util_fun.genref2(req.body)
let object_reuslt =  await  util_fun.mergObjectToQRCode(req.body,config_qrdata,obj_ref2)




 db_insert_qrcode_transaction_n23(req.body,object_reuslt,obj_ref2, function (err, data) {
    if (data === null) {
        let data_res_error = format.create('200', true, "db_insert_qrcode_transaction_n23_fail", null)
        res.send(data_res_error)
    
    } else {
        let data_res = format.create('200', false, "success",data)
        res.send(data_res)       
    }
})


}





exports.action_cancel_qrcode =  (req, res) => {


     db_action_cancel_qrcode_n23(req.body, function (err, data) {
        if (data === null) {
            let data_res_error = format.create('200', true, "db_action_cancel_qrcode_n23_fail", null)
            res.send(data_res_error)
        
        } else {
            let data_res = format.create('200', false, "success","success")
            res.send(data_res)       
        }
    })
    
    
    }




exports.action_checkpay_qrcode =  (req, res) => {


    db_action_checkpay_qrcode_n23(req.body, function (err, data) {
       
       if (data === null) {
           let data_res_error = format.create('200', true, "db_action_check_qrcode_n23_fail", null)
           res.send(data_res_error)
       
       } else {
        if (data.length == 0) {
            let data_res = format.create('200', false, "NOT_PAY", null)
            res.send(data_res)
        } else {
            let data_res = format.create('200', false, "PAY", data[0])
            res.send(data_res)
        } 
       }
   })
   
   
   }
    
    