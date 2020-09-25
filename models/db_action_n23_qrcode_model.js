const pool = require("../config/db_con");
const config = require("../config/env");

exports.db_insert_qrcode_transaction_n23 = function (obj,object_qrcode, callback) {


    let qr_string = object_qrcode.query_qr_string+object_qrcode.crc
    let qr_data = object_qrcode
    let tci_id =  obj.m_tci_id;
    let tcch_id =  obj.m_tcch_id;
    let tci_data = obj;
    let building_id =  obj.m_building_id;  
    let com_code = config.config_bank.PRODUCTCODE_N23
    let prod_code = config.config_bank.PRODUCTCODE_N23
    let ref1 = obj.m_ref1
    let ref2 = obj.m_ref2
    let payment_total = obj.m_payment_amount
    let payment_status = "WAIT_PAY"
    let create_by = 1
    let tranx_id = Math.floor(Math.random() * 9999999999999999999) + 1;

    const query = {
    text: `INSERT INTO public.t_carparking_payment_qr_n23(
    tranx_id
    ,tci_id
    ,tcch_id
    ,tci_data
    ,building_id
    ,qr_data
    ,qr_string
    ,com_code
    ,prod_code
    ,ref1
    ,ref2
    ,payment_total
    ,payment_status   
    ,create_by
    ,create_date
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,current_timestamp) RETURNING  qr_string;`,
        values: [  tranx_id,tci_id,tcch_id,tci_data,building_id,qr_data,qr_string,com_code,prod_code,ref1,ref2,payment_total,payment_status,create_by],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                client.release(true)
                return callback(null, result.rows[0].qr_string);
          

            })
            .catch(err => {
            
                client.release(true)
                return callback(null, null);
            })
    })



}