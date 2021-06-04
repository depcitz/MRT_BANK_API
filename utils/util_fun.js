
let date = require('date-and-time');
const { crc16ccitt } = require('crc');
const util_fun = require("../utils/util_fun");
let moment = require('moment-timezone');

exports.show_log_res = (obj) => {
    try {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Res Data ${timestamp} =>  ${JSON.stringify(obj)}`)
    } catch (error) {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Res Data ${timestamp} =>  `)
    }


}

exports.show_log_req = (obj) => {
    try {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Req Data ${timestamp} =>  ${JSON.stringify(obj)}`)
    } catch (error) {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Req Data ${timestamp} => `)
    }


}



exports.mergObjectToQRCode = (object_local, object_qrdata,obj_ref2) => {
    let obj_result = object_qrdata;
    obj_result.t30["st02"] = { sub_tag_id: '02', length: formatNumberLengthQR(object_local.m_ref1.length), value: object_local.m_ref1 }
    obj_result.t30["st03"] = { sub_tag_id: '03', length: formatNumberLengthQR(obj_ref2.length), value: obj_ref2 }
    obj_result['t54'] = {
        tag_id: '54', length: formatNumberLengthQR(object_local.m_payment_totle.toFixed(2).length), value: object_local.m_payment_totle.toFixed(2)

    }
    let query_all30 = (
        obj_result.t30.st00.sub_tag_id + obj_result.t30.st00.length + obj_result.t30.st00.value +
        obj_result.t30.st01.sub_tag_id + obj_result.t30.st01.length + obj_result.t30.st01.value +
        obj_result.t30.st02.sub_tag_id + obj_result.t30.st02.length + obj_result.t30.st02.value +

        obj_result.t30.st03.sub_tag_id + obj_result.t30.st03.length + obj_result.t30.st03.value)

    let query_qr_string =
        obj_result.t00.tag_id + obj_result.t00.length + obj_result.t00.value +
        obj_result.t01.tag_id + obj_result.t00.length + obj_result.t01.value +
        obj_result.t30.tag_id + (query_all30.length) + query_all30 +
        obj_result.t53.tag_id + obj_result.t53.length + obj_result.t53.value +
        obj_result.t54.tag_id + obj_result.t54.length + obj_result.t54.value +
        obj_result.t58.tag_id + obj_result.t58.length + obj_result.t58.value +
        obj_result.t59.tag_id + obj_result.t59.length + obj_result.t59.value +
        obj_result.t63.tag_id + obj_result.t63.length;

    obj_result.t63.value = crc16ccitt(query_qr_string).toString(16)

    obj_result['query_qr_string'] = query_qr_string;
    obj_result['crc'] = obj_result.t63.value.toUpperCase();
    return obj_result;
}



function formatNumberLengthQR(inputNumber) {
    return ("0" + inputNumber).slice(-2);
}








exports.mergObjectApproval = (obj, obj_tranxId) => {
    let time_stamp = moment().tz('Etc/GMT-7').format('YYYY-MM-DD HH:mm:ss')
    let bankRef = obj.bankRef
    let balance = Number(obj.amount).toFixed(2);
    let cusName = obj.cusName
    let tranxId = obj_tranxId
    let result = {
        "tranxId": tranxId,
        "bankRef": bankRef,
        "respCode": 0,
        "respMsg": "Successful",
        "balance": balance,
        "cusName": cusName,
        "print1": time_stamp

    }

    util_fun.show_log_res(result)
    return result;
}


exports.mergObjectPayment = (obj) => {
    let time_stamp = moment().tz('Etc/GMT-7').format('YYYY-MM-DD HH:mm:ss')
    let bankRef = obj.bankRef
    let balance = Number(obj.amount).toFixed(2);
    let cusName = obj.cusName
    let tranxId = obj.tranxId
    let result = {
        "tranxId": tranxId,
        "bankRef": bankRef,
        "respCode": 0,
        "respMsg": "Successful",
        "balance": balance,
        "cusName": cusName,
        "print1": time_stamp,
  
    }
    return result;
}


  


  exports.genref2 =  (obj) => { 
   
   let time_stamp = moment().tz('Etc/GMT-7').format('YYMMDDHHmmss')
   let cabinet = ("0" + obj.m_cabinet_id).slice(-2)
   let res_amount = obj.m_payment_totle
 
    return `${time_stamp}${cabinet}${res_amount}`;
  }
