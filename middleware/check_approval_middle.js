
const util_fun = require("../utils/util_fun");
const config = require("../config/env");
const code_error = require("../utils/code_error");
const util_res_error = require("../utils/util_res_error");
var moment = require('moment');
const {
        db_check_approval_status_invalid_reference_n23,
        db_check_approval_status_invalid_priceoramount_error_n23,
        db_check_approval_status_transaction_number_duplicate_number_error_n23
} = require("../models/db_action_n23_approval_payment_model");


const {
        db_check_approval_status_invalid_reference_n24,
        db_check_approval_status_invalid_priceoramount_error_n24,
        db_check_approval_status_transaction_number_duplicate_number_error_n24
} = require("../models/db_action_n24_approval_payment_model");


exports.check_status_communication_error = (req, res, next) => {
        //TODO CHECK communication
        next()
}

 
exports.status_transaction_number_duplicate_number_error = (req, res, next) => {

        switch (req.body.comCode) {
                case "911208":
                        db_check_approval_status_transaction_number_duplicate_number_error_n23(req.body, function (err, data) {

                                if (data == 0) {
                                        next()
                                } else {
                                        res.send(util_res_error.json_error_approval(req.body, code_error.status_transaction_number_duplicate_number_error.respCode, code_error.status_transaction_number_duplicate_number_error.respMsg))

                                }

                        })
                        break;
                case "911209":
                        db_check_approval_status_transaction_number_duplicate_number_error_n24(req.body, function (err, data) {

                                if (data == 0) {
                                        next()
                                } else {
                                        res.send(util_res_error.json_error_approval(req.body, code_error.status_transaction_number_duplicate_number_error.respCode, code_error.status_transaction_number_duplicate_number_error.respMsg))

                                }

                        })

                        break;
                default:
                        res.send(util_res_error.json_error_approval(req.body, code_error.status_transaction_number_duplicate_number_error.respCode, code_error.status_transaction_number_duplicate_number_error.respMsg))
                        break;
        }


}



exports.status_invalid_auth_error = (req, res, next) => {
      
        if (req.body.user  !=  config.main_config.AUTH_USER  || req.body.password != config.main_config.AUTH_PASS ) {
           
                res.send(util_res_error.json_error_approval(req.body, code_error.status_invalid_auth_error.respCode, code_error.status_invalid_auth_error.respMsg))
        } else {
                         
                next()
        }
}





exports.status_limit_invalid_priceoramount_error = (req, res, next) => {
        //TODO CHECK Limit Nunber
      
        if (req.body.amount > config.config_error.INVALID_PRICE_OR_AMOUNT) {
           
                res.send(util_res_error.json_error_approval(req.body, code_error.status_over_limit_nunber_or_amount_error.respCode, code_error.status_over_limit_nunber_or_amount_error.respMsg))
        } else {
               
                next()
        }
}

exports.status_notbusiness_hour_number_error = (req, res, next) => {
        let open_business = config.config_error.OPEN_BUSINESS_HOUR_NUMBER;
        let close_business = config.config_error.CLOSE_BUSINESS_HOUR_NUMBER;
        console.log(close_business)
        if (is_between_time_new(open_business, close_business)) {
                //SUCCESS
                next()

        } else {
                //OUT OF TIME
                res.send(util_res_error.json_error_approval(req.body, code_error.status_notbusiness_hour_number_error.respCode, code_error.status_notbusiness_hour_number_error.respMsg))

        }
}

exports.status_field_or_parameter_approval_error = (req, res, next) => {

        if (req.body.user == '' || req.body.user === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.password == '' || req.body.password === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.comCode == '' || req.body.comCode === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.prodCode == '' || req.body.prodCode === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.command == '' || req.body.command === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.bankCode == '' || req.body.bankCode === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.bankRef == '' || req.body.bankRef === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.dateTime == '' || req.body.dateTime === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.effDate == '' || req.body.effDate === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.amount == '' || req.body.amount === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.channel == '' || req.body.channel === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }


        if (req.body.cusName == '' || req.body.cusName === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.ref1 == '' || req.body.ref1 === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.ref2 == '' || req.body.ref2 === undefined) {
                return res.send(util_res_error.json_error_approval(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        return next()
}




// Check N23

exports.status_invalid_reference_error = (req, res, next) => {
   

        switch (req.body.comCode) {
                case "911208":
                        db_check_approval_status_invalid_reference_n23(req.body, function (err, data) {
                                let data_check = data.count
                                if (data_check == 0) {
                                        res.send(util_res_error.json_error_approval(req.body, code_error.status_invalid_reference_error.respCode, code_error.status_invalid_reference_error.respMsg))
                                } else {
                                        next()
                                }
                        })
                        break;
                case "911209":
                        db_check_approval_status_invalid_reference_n24(req.body, function (err, data) {
                                let data_check = data.count
                                if (data_check == 0) {
                                        res.send(util_res_error.json_error_approval(req.body, code_error.status_invalid_reference_error.respCode, code_error.status_invalid_reference_error.respMsg))
                                } else {
                                        next()
                                }
                        })


                        break;
                default:
                        res.send(util_res_error.json_error_approval(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
                        break;
        }



}


exports.status_invalid_priceoramount_error = (req, res, next) => {

        switch (req.body.comCode) {
                case "911208":
                        db_check_approval_status_invalid_priceoramount_error_n23(req.body, function (err, data) {
                                let data_amount = data.payment_total
                                let req_amount = req.body.amount

                                if (data_amount == req_amount) {
                                        next()
                                } else {
                                        res.send(util_res_error.json_error_approval(req.body, code_error.status_invalid_priceoramount_error.respCode, code_error.status_invalid_priceoramount_error.respMsg))
                                }
                        })
                        break;
                case "911209":
                        db_check_approval_status_invalid_priceoramount_error_n24(req.body, function (err, data) {
                                let data_amount = data.payment_total
                                let req_amount = req.body.amount

                                if (data_amount == req_amount) {
                                        next()
                                } else {
                                        res.send(util_res_error.json_error_approval(req.body, code_error.status_invalid_priceoramount_error.respCode, code_error.status_invalid_priceoramount_error.respMsg))
                                }



                        })


                        break;
                default:
                        res.send(util_res_error.json_error_approval(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
                        break;
        }




}



//Funtion 




function is_between_time_new(start, end) {
        let currnet = moment().format('HH:mm:ss');

        let startTime = moment(start, 'HH:mm:ss')
        let midnightTime = moment('00:00:00', 'HH:mm:ss')
        let endTime = moment(end, 'HH:mm:ss')
        let currentTime = moment(currnet, 'HH:mm:ss')

        if (endTime.isBefore(startTime)) {
                if (currentTime.isBetween(midnightTime, endTime, null, '[]')) {
                        currentTime.add(1, 'days');
                }
                endTime.add(1, 'days');
        }
        //alert(currentTime.isBetween(startTime, endTime))
        return currentTime.isBetween(startTime, endTime);
}