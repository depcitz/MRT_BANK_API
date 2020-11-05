const pool = require("../config/db_con");
const config = require("../config/env");

exports.db_request_update_approval_n23 = function (obj, callback) {


    let ref1 = obj.ref1
    let ref2 = obj.ref2
    let payment_status = (obj.command).toUpperCase();
    let date_time = obj.dateTime
    let eff_date = obj.effDate
    let req_approval_data = obj
    let bank_code = obj.bankCode
    let bank_ref = obj.bankRef

    const query = {
        text: `UPDATE public.t_carparking_payment_qr_n23	SET
    req_approval_data=$3
    ,date_time=$4
    ,eff_date=$5
    ,payment_status = $6
    ,bank_code = $7
    ,bank_ref = $8
    ,approval_date =  current_timestamp
    WHERE ref1 = $1 and  ref2 = $2 and payment_status='WAIT_PAY'  RETURNING  tranx_id;`,
        values: [ref1, ref2, req_approval_data, date_time, eff_date, payment_status,bank_code,bank_ref],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                console.log(result.rows)
                client.release(true)
                return callback(null, result.rows[0].tranx_id);
            })
            .catch(err => {          
                console.log("asdlap[dapasdasdsd")
                client.release(true)
                return callback(null,null);
            })
    })



}



exports.db_response_update_approval_n23 = function (obj, res_obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2
    let res_approval_data = res_obj



    const query = {
        text: `UPDATE public.t_carparking_payment_qr_n23	SET
    res_approval_data=$3 
    WHERE ref1 = $1 and  ref2 = $2 and payment_status='APPROVAL';`,
        values: [ref1, ref2, res_approval_data],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)
                return callback(null, true);


            })
            .catch(err => {
                console.log(err)  
                client.release(true)
                return callback(null, null);
            })
    })



}




////// PAYMENT //////
exports.db_request_update_payment_n23 = function (obj, callback) {

    
    let ref1 = obj.ref1
    let ref2 = obj.ref2
    let payment_status = (obj.command).toUpperCase();
    let date_time = obj.dateTime
    let eff_date = obj.effDate
    let req_payment_data = obj


    const query = {
        text: `UPDATE public.t_carparking_payment_qr_n23	SET
    req_payment_data=$3
    ,date_time=$4
    ,eff_date=$5
    ,payment_status = $6
    ,payment_date =  current_timestamp
    WHERE ref1 = $1 and  ref2 = $2  and payment_status='APPROVAL' `,
        values: [ref1, ref2, req_payment_data, date_time, eff_date, payment_status],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)
                return callback(null,true);

            })
            .catch(err => {
                console.log(err)
                client.release(true)
                return callback(null,null);
            })
    })



}




exports.db_response_update_payment_n23 = function (obj, res_obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2
    let res_payment_data = res_obj


    const query = {
        text: `UPDATE public.t_carparking_payment_qr_n23	SET
    res_payment_data=$3 
    WHERE ref1 = $1 and  ref2 = $2 and payment_status='PAYMENT';`,
        values: [ref1, ref2, res_payment_data],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
             
                client.release(true)
                return callback(null, true);


            })
            .catch(err => {
                client.release(true)
                return callback(null, null);
            })
    })



}




// MIDDLEWARE APPROVAL //


exports.db_check_approval_status_invalid_reference_n23 = function (obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2  

    const query = {
        text: `SELECT count(*) from t_carparking_payment_qr_n23 
        WHERE  ref1 = $1 
        AND  ref2 = $2 
        AND payment_status='WAIT_PAY';`,
        values: [ref1, ref2],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)              
                return callback(null, result.rows[0]);

            })
            .catch(err => {               
                client.release(true)
                return callback(null, null);
            })
    })



}



exports.db_check_approval_status_invalid_priceoramount_error_n23 = function (obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2  

    const query = {
        text: `SELECT payment_total from t_carparking_payment_qr_n23 
        WHERE  ref1 = $1 
        AND  ref2 = $2 
        AND payment_status='WAIT_PAY';`,
        values: [ref1, ref2],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)              
                return callback(null, result.rows[0]);

            })
            .catch(err => {               
                client.release(true)
                return callback(null, null);
            })
    })



}



// MIDDLEWARE PAYMENT //


exports.db_check_payment_status_invalid_reference_n23 = function (obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2  

    const query = {
        text: `SELECT count(*) from t_carparking_payment_qr_n23 
        WHERE  ref1 = $1 
        AND  ref2 = $2 
        AND payment_status='APPROVAL';`,
        values: [ref1, ref2],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)              
                return callback(null, result.rows[0]);

            })
            .catch(err => {               
                client.release(true)
                return callback(null, null);
            })
    })



}


exports.db_check_payment_status_invalid_priceoramount_error_n23 = function (obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2  

    const query = {
        text: `SELECT payment_total from t_carparking_payment_qr_n23 
        WHERE  ref1 = $1 
        AND  ref2 = $2 
        AND payment_status='APPROVAL';`,
        values: [ref1, ref2],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)              
                return callback(null, result.rows[0]);

            })
            .catch(err => {               
                client.release(true)
                return callback(null, null);
            })
    })



}


exports.db_check_payment_status_invalid_transaction_number_error_n23 = function (obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2  

    const query = {
        text: `SELECT tranx_id from t_carparking_payment_qr_n23 
        WHERE  ref1 = $1 
        AND  ref2 = $2 
        AND payment_status='APPROVAL';`,
        values: [ref1, ref2],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)              
                return callback(null, result.rows[0]);

            })
            .catch(err => {               
                client.release(true)
                return callback(null, null);
            })
    })

}






exports.db_check_approval_status_transaction_number_duplicate_number_error_n23 = function (obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2

    const query = {
        text: `select count(*) from t_carparking_payment_qr_n23
        where ref1 = $1    and ref2  = $2
        and payment_status  in ('PAYMENT', 'APPROVAL');`,
        values: [ref1,ref2],
    }
     
    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
             
                client.release(true)              
                return callback(null, result.rows[0].count);


            })
            .catch(err => {
                client.release(true)
               return callback(null, null);
            })
    })

}


exports.db_check_payment_status_transaction_number_duplicate_number_error_n23 = function (obj, callback) {

    let ref1 = obj.ref1
    let ref2 = obj.ref2

    const query = {
        text: `select count(*) from t_carparking_payment_qr_n23
        where ref1 = $1    and ref2  = $2
        and payment_status  in ('PAYMENT');`,
        values: [ref1,ref2],
    }
     
    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
             
                client.release(true)              
                return callback(null, result.rows[0].count);


            })
            .catch(err => {
                client.release(true)
               return callback(null, null);
            })
    })

}





