
const util_fun = require("../utils/util_fun");
const config = require("../config/env");
const code_error = require("../utils/code_error");
const util_res_error = require("../utils/util_res_error");
var moment = require('moment');



exports.check_status_communication_error = (req, res, next) => {
        //TODO CHECK communication
        next()
}


exports.status_invalid_priceoramount_error = (req, res, next) => {
        //TODO CHECK Limit Nunber
        if (req.body.amount > config.config_error.INVALID_PRICE_OR_AMOUNT) {
                res.send(util_res_error.json_error_payment(req.body, code_error.status_invalid_priceoramount_error.respCode, code_error.status_invalid_priceoramount_error.respMsg))
        } else {
                next()
        }
}

exports.status_notbusiness_hour_number_error = (req, res, next) => {
        let open_business = config.config_error.OPEN_BUSINESS_HOUR_NUMBER;
        let close_business = config.config_error.CLOSE_BUSINESS_HOUR_NUMBER;
        
        if (is_between_time_new(open_business, close_business)) {
                //SUCCESS
                next()

        } else {
                //OUT OF TIME
                res.send(util_res_error.json_error_payment(req.body, code_error.status_notbusiness_hour_number_error.respCode, code_error.status_notbusiness_hour_number_error.respMsg))

        }
}

exports.status_field_or_parameter_approval_error = (req, res, next) => {

        if (req.body.user == '' || req.body.user === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.password == '' || req.body.password === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.comCode == '' || req.body.comCode === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.prodCode == '' || req.body.prodCode === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.command == '' || req.body.command === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.bankCode == '' || req.body.bankCode === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.bankRef == '' || req.body.bankRef === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.tranxId == '' || req.body.tranxId === undefined) {
            return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
    }

        if (req.body.dateTime == '' || req.body.dateTime === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.effDate == '' || req.body.effDate === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.amount == '' || req.body.amount === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.channel == '' || req.body.channel === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }


        if (req.body.cusName == '' || req.body.cusName === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.ref1 == '' || req.body.ref1 === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

        if (req.body.ref2 == '' || req.body.ref2 === undefined) {
                return res.send(util_res_error.json_error_payment(req.body, code_error.status_field_or_parameter_error.respCode, code_error.status_field_or_parameter_error.respMsg))
        }

       return next()
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
       
        return currentTime.isBetween(startTime, endTime);
}