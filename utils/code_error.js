const config_code_error = {
 
    status_communication_error:{
        respCode:99,
        respMsg:"Communication Error"
    },
    status_invalid_auth_error: {
        respCode:101,
        respMsg:"Invalid username/password"
    },
    status_field_or_parameter_error: {
        respCode:102,
        respMsg:"Require field or parameter is null"
    },
    status_field_or_parameter_error: {
        respCode:102,
        respMsg:"Require field or parameter is null"
    },
    status_over_limit_nunber_or_amount_error: {
        respCode:103,
        respMsg:"Transaction amount or number of transaction is over limit "
    },
    status_invalid_reference_error: {
        respCode:104,
        respMsg:"Invalid reference"
    },
    status_invalid_transaction_number_error: {
        respCode:105,
        respMsg:"Invalid transaction number"
    },
    status_transaction_number_duplicate_number_error: {
        respCode:106,
        respMsg:"Transaction number duplicate"
    },
    status_notbusiness_hour_number_error: {
        respCode:107,
        respMsg:"Not business hour "
    },
    status_invalid_priceoramount_error: {
        respCode:108,
        respMsg:"Invalid price or amount"
    },
    status_other_error: {
        respCode:999,
        respMsg:"Other error"
    }
  
  
}

module.exports = config_code_error;


