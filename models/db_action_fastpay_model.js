const pool = require("../config/db_con");


exports.db_update_fastpay_booking = function (obj, callback) {
    let orderRef = obj.orderRef
    let prc = obj.prc
    let src = obj.src
    let ord = obj.ord
    let holder = obj.holder 
    let successCode = obj.successCode
    let orderRef1 = obj.orderRef1
    let orderRef2 = obj.orderRef2    
    let payRef = obj.payRef
    let amt = obj.amt
    let cur = obj.cur
    let remark = obj.remark
    let authId = obj.authId
    let eci = obj.eci
    let payerAuth = obj.payerAuth
    let sourceIp = obj.sourceIp
    let ipCountry = obj.ipCountry
    let cardNo = obj.cardNo
    let surCharge = obj.surCharge
    let totalAmt = obj.totalAmt



    const query = {
        text: `
        UPDATE public.t_booking_parking_info SET 
        payment_bank_out_order_ref=$3
        ,payment_bank_out_prc=$4
        ,payment_bank_out_src=$5
        ,payment_bank_out_ord=$6
        ,payment_bank_out_holder=$7
        ,payment_bank_out_successcode=$8
        ,payment_bank_out_orderref1=$9
        ,payment_bank_out_orderref2=$10
        ,payment_bank_out_amt=$11
        ,payment_bank_out_cur=$12
        ,payment_bank_out_remark=$13
        ,payment_bank_out_authid=$14
        ,payment_bank_out_eci=$15
        ,payment_bank_out_payerauth=$16
        ,payment_bank_out_sourceip=$17
        ,payment_bank_out_ipcountry=$18
        ,payment_bank_out_cardno=$19
        ,payment_surchange=$20
        ,payment_totalamt=$21 
        ,payment_res_bank_data=$22
        ,payment_amount=$23
        ,payment_bank_status = 'PAY'
        ,booking_parking_status = 'SUCCESS'       
        ,booking_parking_hold_time = '1 hour'::interval 
        ,booking_parking_start_time = current_timestamp
        ,update_date= current_timestamp     
        ,payment_res_bank_time = current_timestamp  
        WHERE tbpi_id=$1, tbpi_code=$2 ;`,
        values: [],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)
                return callback(null, result.rows);

            })
            .catch(err => {
                client.release(true)
                return callback(null, null);
            })
    })



}