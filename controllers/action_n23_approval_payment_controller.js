const { 
db_request_update_approval_n23
,db_response_update_approval_n23 
} = require("../models/db_action_n23_approval_payment_model");
const util_fun = require("../utils/util_fun");

exports.action_approval =  (req, res) => {

db_request_update_approval_n23(req.body, async  function (err, data) {
//console.log(data)
  let data_res =   await util_fun.mergObjectApproval(req.body,data);
  res.send(data_res)

  
  db_response_update_approval_n23(req.body,data_res,   function (err, data) {
 
    
    })

})
}



exports.action_payment = (req, res) => {
    let bankRef = req.body.bankRef
    let balance = Number(req.body.amount).toFixed(2);       
    let cusName = req.body.cusName
    let tranxId = req.body.tranxId
    res.send({
        "tranxId": tranxId,
        "bankRef": bankRef,
        "respCode": 0,
        "respMsg": "Successful",
        "balance": balance,
        "cusName": cusName,
        "print1": "Print 1 TEST Payment",
        "print2": "Print 2 TEST Payment",
        "print3": "Print 3 TEST Payment",
    })
}

