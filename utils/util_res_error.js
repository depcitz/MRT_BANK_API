
let date = require('date-and-time');

exports.json_error_approval = (obj, respCode, respMsg) => {
        let tranxId = Math.floor(Math.random() * 9999999999) + 1;
        let bankRef = obj.bankRef;
        return {
                "tranxId": tranxId,
                "bankRef": bankRef,
                "respCode": respCode,
                "respMsg": respMsg,
                "balance": 0.00,
                "cusName": obj.cusName,
                "info": "information",
                "print1": "Print 1 approval",
                "print2": "Print 2 approval",
                "print3": "Print 3 approval"
        }

}


exports.json_error_payment = (obj, respCode, respMsg) => {
        let tranxId = Math.floor(Math.random() * 9999999999) + 1;
        let bankRef = obj.bankRef;
        let cusName = obj.cusName;
        return {
                "tranxId": tranxId,
                "bankRef": bankRef,
                "respCode": respCode,
                "respMsg": respMsg,
                "balance": 0.00,
                "cusName": cusName,
                "info": "information",
                "print1": "Print 1 payment",
                "print2": "Print 2 payment",
                "print3": "Print 3 payment"
        }

}


