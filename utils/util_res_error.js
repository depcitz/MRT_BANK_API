
let date = require('date-and-time');

exports.json_error_approval = (obj,respCode,respMsg) => {
return {
        "tranxId":"",
        "bankRef":"K00002 00009876", 
        "respCode":0, 
        "respMsg":"Successful", 
        "balance":0.00, 
        "cusName":obj.cusName, 
        "info":"information", 
        "print1":"Print 1", 
        "print2":"Print 2", 
        "print3":"Print 3"
        }

}

