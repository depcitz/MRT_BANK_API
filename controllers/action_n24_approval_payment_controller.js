


exports.action_approval = (req, res) => {
    let bankRef = req.body.bankRef
    let balance = Number(req.body.amount).toFixed(2);       
    let cusName = req.body.cusName
    let tranxId = Math.floor(Math.random() * 9999999999) + 1;
    res.send({
        "tranxId": tranxId,
        "bankRef": bankRef,
        "respCode": 0,
        "respMsg": "Successful",
        "balance": balance,
        "cusName": cusName,
        "print1": "Print 1 TEST",
        "print2": "Print 2 TEST",
        "print3": "Print 3 TEST" 
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
        "print1": "Print 1 TEST",
        "print2": "Print 2 TEST",
        "print3": "Print 3 TEST" 
    })
}

