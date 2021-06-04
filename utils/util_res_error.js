
let date = require('date-and-time');
const util_fun = require("../utils/util_fun");
let moment = require('moment-timezone');


exports.json_error_approval = (obj, respCode, respMsg) => {
        let time_stamp = moment().tz('Etc/GMT-7').format('YYYY-MM-DD HH:mm:ss')
        let tranxId = obj.tranxId
        let bankRef = obj.bankRef;
        let result = {
                "tranxId": tranxId,
                "bankRef": bankRef,
                "respCode": respCode,
                "respMsg": respMsg,
                "balance": 0.00,
                "cusName": obj.cusName,
                "info": "information",
                "print1": time_stamp             
        }
        util_fun.show_log_res(result)
        return result

}


exports.json_error_payment = (obj, respCode, respMsg) => {
        let time_stamp = moment().tz('Etc/GMT-7').format('YYYY-MM-DD HH:mm:ss')
        let tranxId = obj.tranxId;
        let bankRef = obj.bankRef;
        let cusName = obj.cusName;
        let result = {
                "tranxId": tranxId,
                "bankRef": bankRef,
                "respCode": respCode,
                "respMsg": respMsg,
                "balance": 0.00,
                "cusName": cusName,
                "info": "information",
                "print1": time_stamp   
         
        }

        util_fun.show_log_res(result)
        return result

}


