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
        ,payment_bank_out_payref=$23
        ,payment_bank_status = 'PAY'
        ,booking_parking_hold_time = '1 hour'::interval 
        ,booking_parking_start_time = current_timestamp
        ,update_date= current_timestamp     
        ,payment_res_bank_time = current_timestamp  
        WHERE tbpi_id = to_number($1,'99999999999999999999')::bigint    and  tbpi_code=$2 ;`,
        values: [
            orderRef2, orderRef, orderRef, prc, src, ord, holder, successCode, orderRef1, orderRef2, amt,
            cur, remark, authId, eci, payerAuth, sourceIp, ipCountry, cardNo, surCharge, totalAmt, obj, payRef
        ],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                console.log(result)
                client.release(true)
                return callback(null, result.rows);

            })
            .catch(err => {
                console.log(err)
                client.release(true)
                return callback(null, null);
            })
    })



}




exports.db_update_fastpay_booking_fail = function (obj, callback) {

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
        ,payment_bank_out_payref=$23
        ,payment_bank_status = 'FAIL_PAY'        
        ,update_date= current_timestamp     
        ,payment_res_bank_time = current_timestamp  
        WHERE tbpi_id = to_number($1,'99999999999999999999')::bigint    and  tbpi_code=$2 ;`,
        values: [
            orderRef2, orderRef, orderRef, prc, src, ord, holder, successCode, orderRef1, orderRef2, amt,
            cur, remark, authId, eci, payerAuth, sourceIp, ipCountry, cardNo, surCharge, totalAmt, obj, payRef
        ],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                console.log(result)
                client.release(true)
                return callback(null, result.rows);

            })
            .catch(err => {
                console.log(err)
                client.release(true)
                return callback(null, null);
            })
    })



}





exports.db_update_fastpay_booking_cancel = function (obj, callback) {

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
        ,payment_bank_out_payref=$23
        ,payment_bank_status = 'CANCEL_PAY'   
        ,update_date= current_timestamp     
        ,payment_res_bank_time = current_timestamp  
        WHERE tbpi_id = to_number($1,'99999999999999999999')::bigint    and  tbpi_code=$2 ;`,
        values: [
            orderRef2, orderRef, orderRef, prc, src, ord, holder, successCode, orderRef1, orderRef2, amt,
            cur, remark, authId, eci, payerAuth, sourceIp, ipCountry, cardNo, surCharge, totalAmt, obj, payRef
        ],
    }

    pool.connect().then(client => {
        return client.query(query)
            .then(result => {
                console.log(result)
                client.release(true)
                return callback(null, result.rows);

            })
            .catch(err => {
                console.log(err)
                client.release(true)
                return callback(null, null);
            })
    })



}







exports.db_fastpay_newmenber = async function (obj, callback) {
    let res_data = obj
    let orderRef = obj.orderRef
    let orderRef1 = obj.orderRef1
    let orderRef2 = obj.orderRef2
    let amt = obj.amt
    var res_tmcpi_id = ''


    let txt_queryinsert_t_member_card_payment_info = `insert into t_member_card_payment_info
        (tmcpi_code,tmcpi_time,wrmp_id,building_id,customer_id,prefix_name,first_name,last_name,
        identity_card,address,sub_district_id,sub_district_name,district_id,district_name,province_id,province_name,zip_code,
        mobile_number,payment_type_id,payment_event_id,payment_monthly_amount,payment_pledge_amount,
        payment_discount_amount,payment_customer_amount,payment_withdraw_amount,payment_status,
        payment_res_bank_time,payment_res_bank_data,bank_order_ref,bank_ref1,bank_ref2,bank_amount) 
         
        select 
        ('TNM0'||upper(replace(uuid_generate_v4()::text,'-',''))),current_timestamp,
        wrmp_id,building_id,customer_id,prefix_name,
        register_firstname,
        register_lastname,
        identity_card,
        register_address,
        sub_district_id,sub_district_name,
        district_id,district_name,
        province_id,province_name,zip_code,
        register_mobile_number,
        6 as payment_type_id,
        1 as payment_event_id,
        1000.00 as payment_monthly_amount,
        400.00 as payment_pledge_amount,
        0.00 as payment_discount_amount,
        1400.00 as payment_customer_amount,
        0.00 as payment_withdraw_amount,
        'PAY' as payment_status,
        current_timestamp,
        $2,$3,$4,$5,$6                               
        from w_register_member_parking 
        where wrmp_id = to_number($1,'99999999999999999999')::bigint RETURNING tmcpi_id`;


    const query_insert_t_member_card_payment_infog = {
        text: txt_queryinsert_t_member_card_payment_info,
        values: [orderRef2, res_data, orderRef, orderRef1, orderRef2, amt],
    }


    let txt_update_w_register_member_parking = `UPDATE public.w_register_member_parking
            SET 
            workflow_id= 10
            ,wait_payment_status='PAY'
            ,wait_receive_membercard_status='NOT_RECEIVE'
            ,wait_receive_membercard_interval= '3 day'::interval 
            ,wait_receive_membercard_timestamp= current_timestamp
            ,tmcpi_id= $2
            WHERE wrmp_id = to_number($1,'99999999999999999999')::bigint;` ;

    let query_update_w_register_member_parking = {
        text: txt_update_w_register_member_parking,
        values: [orderRef2, res_tmcpi_id],
    }


    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        let res_tmcpi_id = (await client.query(query_insert_t_member_card_payment_infog)).rows[0].tmcpi_id;
        query_update_w_register_member_parking.values[1] = res_tmcpi_id
        await client.query(query_update_w_register_member_parking);
        await client.query('COMMIT')

    } catch (e) {
        await client.query('ROLLBACK')
        client.release(true)
        return callback(null, null)

    } finally {

        client.release(true)
        return callback(null, true)

    }


}





exports.db_fastpay_newmenber_cancel = async function (obj, callback) {
    let res_data = obj
    let orderRef = obj.orderRef
    let orderRef1 = obj.orderRef1
    let orderRef2 = obj.orderRef2
    let amt = obj.amt


    let txt_queryinsert_t_member_card_payment_info = `insert into t_member_card_payment_info
        (tmcpi_code,tmcpi_time,wrmp_id,building_id,customer_id,prefix_name,first_name,last_name,
        identity_card,address,sub_district_id,sub_district_name,district_id,district_name,province_id,province_name,zip_code,
        mobile_number,payment_type_id,payment_event_id,payment_monthly_amount,payment_pledge_amount,
        payment_discount_amount,payment_customer_amount,payment_withdraw_amount,payment_status,
        payment_res_bank_time,payment_res_bank_data,bank_order_ref,bank_ref1,bank_ref2,bank_amount) 
         
        select 
        ('TNM0'||upper(replace(uuid_generate_v4()::text,'-',''))),current_timestamp,
        wrmp_id,building_id,customer_id,prefix_name,
        register_firstname,
        register_lastname,
        identity_card,
        register_address,
        sub_district_id,sub_district_name,
        district_id,district_name,
        province_id,province_name,zip_code,
        register_mobile_number,
        6 as payment_type_id,
        1 as payment_event_id,
        1000.00 as payment_monthly_amount,
        400.00 as payment_pledge_amount,
        0.00 as payment_discount_amount,
        1400.00 as payment_customer_amount,
        0.00 as payment_withdraw_amount,
        'CANCEL_PAY' as payment_status,
        current_timestamp,
        $2,$3,$4,$5,$6                               
        from w_register_member_parking 
        where wrmp_id = to_number($1,'99999999999999999999')::bigint RETURNING tmcpi_id`;


    const query_insert_t_member_card_payment_infog = {
        text: txt_queryinsert_t_member_card_payment_info,
        values: [orderRef2, res_data, orderRef, orderRef1, orderRef2, amt],
    }





    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        await client.query(query_insert_t_member_card_payment_infog)

        await client.query('COMMIT')

    } catch (e) {
        await client.query('ROLLBACK')
        client.release(true)
        return callback(null, null)

    } finally {

        client.release(true)
        return callback(null, true)

    }


}



exports.db_fastpay_newmenber_fail = async function (obj, callback) {
    let res_data = obj
    let orderRef = obj.orderRef
    let orderRef1 = obj.orderRef1
    let orderRef2 = obj.orderRef2
    let amt = obj.amt



    let txt_queryinsert_t_member_card_payment_info = `insert into t_member_card_payment_info
        (tmcpi_code,tmcpi_time,wrmp_id,building_id,customer_id,prefix_name,first_name,last_name,
        identity_card,address,sub_district_id,sub_district_name,district_id,district_name,province_id,province_name,zip_code,
        mobile_number,payment_type_id,payment_event_id,payment_monthly_amount,payment_pledge_amount,
        payment_discount_amount,payment_customer_amount,payment_withdraw_amount,payment_status,
        payment_res_bank_time,payment_res_bank_data,bank_order_ref,bank_ref1,bank_ref2,bank_amount) 
         
        select 
        ('TNM0'||upper(replace(uuid_generate_v4()::text,'-',''))),current_timestamp,
        wrmp_id,building_id,customer_id,prefix_name,
        register_firstname,
        register_lastname,
        identity_card,
        register_address,
        sub_district_id,sub_district_name,
        district_id,district_name,
        province_id,province_name,zip_code,
        register_mobile_number,
        6 as payment_type_id,
        1 as payment_event_id,
        1000.00 as payment_monthly_amount,
        400.00 as payment_pledge_amount,
        0.00 as payment_discount_amount,
        1400.00 as payment_customer_amount,
        0.00 as payment_withdraw_amount,
        'FAIL_PAY' as payment_status,
        current_timestamp,
        $2,$3,$4,$5,$6                               
        from w_register_member_parking 
        where wrmp_id = to_number($1,'99999999999999999999')::bigint RETURNING tmcpi_id`;


    const query_insert_t_member_card_payment_infog = {
        text: txt_queryinsert_t_member_card_payment_info,
        values: [orderRef2, res_data, orderRef, orderRef1, orderRef2, amt],
    }





    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        await client.query(query_insert_t_member_card_payment_infog)
        await client.query('COMMIT')

    } catch (e) {
        await client.query('ROLLBACK')
        client.release(true)
        return callback(null, null)

    } finally {

        client.release(true)
        return callback(null, true)

    }


}






exports.db_fastpay_renewmenber_fail = async function (obj, callback) {
    let res_data = obj
    let orderRef = obj.orderRef
    let orderRef1 = obj.orderRef1
    let orderRef2 = obj.orderRef2
    let amt = obj.amt


    let txt_queryinsert_t_member_card_payment_info = `
    insert into t_member_card_payment_info
            (tmcpi_code,tmcpi_time,building_id,customer_id,prefix_name,first_name,last_name,
            identity_card,address,sub_district_id,sub_district_name,district_id,district_name,province_id,province_name,zip_code,
            mobile_number,card_id,card_code,card_start_time,card_expire_time,payment_type_id,payment_event_id,payment_monthly_amount,payment_pledge_amount,
            payment_discount_amount,payment_customer_amount,payment_withdraw_amount,payment_status,
            payment_res_bank_time,payment_res_bank_data,bank_order_ref,bank_ref1,bank_ref2,bank_amount) 
    
    select 
            ('TRNM0'||upper(replace(uuid_generate_v4()::text,'-',''))),current_timestamp,
            mc_building_id,customer_id,prefix_name,
            customer_firstname,
            customer_lastname,
            customer_identity_card,
            customer_address,
            sub_district_id,sub_district_name,
            district_id,district_name,
            province_id,province_name,zip_code,
            customer_mobile_number,
            card_id,card_code,
            null as card_start_time,
            null as card_expire_time,
            6 as payment_type_id,
            2 as payment_event_id,
            1000.00 as payment_monthly_amount,
            0.00 as payment_pledge_amount,
            0.00 as payment_discount_amount,
            0.00 as payment_customer_amount,
            0.00 as payment_withdraw_amount,
            'FAIL_PAY' as payment_status,
            current_timestamp,
            $2,$3,$4,$5,$6                               
            from ref_customer_building_card rcbc 
            join mc_customer mcc on rcbc.mc_customer_id = mcc.customer_id
        where rcbc_id = to_number($1,'??99999999999999999999')::bigint`;


    const query_insert_t_member_card_payment_infog = {
        text: txt_queryinsert_t_member_card_payment_info,
        values: [orderRef1, res_data, orderRef, orderRef1, orderRef2, amt],
    }





    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        await client.query(query_insert_t_member_card_payment_infog)
        await client.query('COMMIT')

    } catch (e) {
    
        await client.query('ROLLBACK')
        client.release(true)
        return callback(null, null)

    } finally {

        client.release(true)
        return callback(null, true)

    }


}






exports.db_fastpay_renewmenber_cancel = async function (obj, callback) {
    let res_data = obj
    let orderRef = obj.orderRef
    let orderRef1 = obj.orderRef1
    let orderRef2 = obj.orderRef2
    let amt = obj.amt


    let txt_queryinsert_t_member_card_payment_info = `
    insert into t_member_card_payment_info
            (tmcpi_code,tmcpi_time,building_id,customer_id,prefix_name,first_name,last_name,
            identity_card,address,sub_district_id,sub_district_name,district_id,district_name,province_id,province_name,zip_code,
            mobile_number,card_id,card_code,card_start_time,card_expire_time,payment_type_id,payment_event_id,payment_monthly_amount,payment_pledge_amount,
            payment_discount_amount,payment_customer_amount,payment_withdraw_amount,payment_status,
            payment_res_bank_time,payment_res_bank_data,bank_order_ref,bank_ref1,bank_ref2,bank_amount) 
    
    select 
            ('TRNM0'||upper(replace(uuid_generate_v4()::text,'-',''))),current_timestamp,
            mc_building_id,customer_id,prefix_name,
            customer_firstname,
            customer_lastname,
            customer_identity_card,
            customer_address,
            sub_district_id,sub_district_name,
            district_id,district_name,
            province_id,province_name,zip_code,
            customer_mobile_number,
            card_id,card_code,
            null as card_start_time,
            null as card_expire_time,
            6 as payment_type_id,
            2 as payment_event_id,
            1000.00 as payment_monthly_amount,
            0.00 as payment_pledge_amount,
            0.00 as payment_discount_amount,
            0.00 as payment_customer_amount,
            0.00 as payment_withdraw_amount,
            'CANCEL_PAY' as payment_status,
            current_timestamp,
            $2,$3,$4,$5,$6                               
            from ref_customer_building_card rcbc 
            join mc_customer mcc on rcbc.mc_customer_id = mcc.customer_id
        where rcbc_id = to_number($1,'??99999999999999999999')::bigint`;


    const query_insert_t_member_card_payment_infog = {
        text: txt_queryinsert_t_member_card_payment_info,
        values: [orderRef1, res_data, orderRef, orderRef1, orderRef2, amt],
    }





    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        await client.query(query_insert_t_member_card_payment_infog)
        await client.query('COMMIT')

    } catch (e) {
      
        await client.query('ROLLBACK')
        client.release(true)
        return callback(null, null)

    } finally {

        client.release(true)
        return callback(null, true)

    }


}





exports.db_fastpay_renewmenber = async function (obj, callback) {
    let res_data = obj
    let orderRef = obj.orderRef
    let orderRef1 = obj.orderRef1
    let orderRef2 = obj.orderRef2
    let amt = obj.amt


    let txt_queryinsert_t_member_card_payment_info = `
    insert into t_member_card_payment_info
            (tmcpi_code,tmcpi_time,building_id,customer_id,prefix_name,first_name,last_name,
            identity_card,address,sub_district_id,sub_district_name,district_id,district_name,province_id,province_name,zip_code,
            mobile_number,card_id,card_code,card_start_time,card_expire_time,payment_type_id,payment_event_id,payment_monthly_amount,payment_pledge_amount,
            payment_discount_amount,payment_customer_amount,payment_withdraw_amount,payment_status,
            payment_res_bank_time,payment_res_bank_data,bank_order_ref,bank_ref1,bank_ref2,bank_amount) 
    
    select 
            ('TRNM0'||upper(replace(uuid_generate_v4()::text,'-',''))),current_timestamp,
            mc_building_id,customer_id,prefix_name,
            customer_firstname,
            customer_lastname,
            customer_identity_card,
            customer_address,
            sub_district_id,sub_district_name,
            district_id,district_name,
            province_id,province_name,zip_code,
            customer_mobile_number,
            card_id,card_code,
            card_expire_time as card_start_time,
            fun_member_card_getexpiretime(card_expire_time) as card_expire_time,
            6 as payment_type_id,
            2 as payment_event_id,
            1000.00 as payment_monthly_amount,
            0.00 as payment_pledge_amount,
            0.00 as payment_discount_amount,
            0.00 as payment_customer_amount,
            0.00 as payment_withdraw_amount,
            'PAY' as payment_status,
            current_timestamp,
            $2,$3,$4,$5,$6                               
            from ref_customer_building_card rcbc 
            join mc_customer mcc on rcbc.mc_customer_id = mcc.customer_id
            where rcbc_id = to_number($1,'??99999999999999999999')::bigint`;




    const query_insert_t_member_card_payment_infog = {
        text: txt_queryinsert_t_member_card_payment_info,
        values: [orderRef1, res_data, orderRef, orderRef1, orderRef2, amt],
    }

    let txt_update_ref_customer_building_card = `
    UPDATE public.ref_customer_building_card
    SET   
    card_expire_time =   fun_member_card_getexpiretime(card_expire_time),
    update_date = current_timestamp       
    where rcbc_id = to_number($1,'??99999999999999999999')::bigint`;

const query_update_ref_customer_building_card = {
    text: txt_update_ref_customer_building_card,
    values: [orderRef1],
}






    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        await client.query(query_insert_t_member_card_payment_infog)
        await client.query(query_update_ref_customer_building_card)
        await client.query('COMMIT')

    } catch (e) {
      
        await client.query('ROLLBACK')
        client.release(true)
        return callback(null, null)

    } finally {

        client.release(true)
        return callback(null, true)

    }


}

