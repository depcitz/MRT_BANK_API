
const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");
const mid_auth = require("../middleware/auth_middle");
const mid_check_payment = require("../middleware/check_payment_middle");
const {action_payment} = require("../controllers/action_payment_controller");






router.post('/',  
mid_data.data_mid
,mid_check_payment.status_invalid_reference_error
,mid_check_payment.status_limit_invalid_priceoramount_error
,mid_check_payment.status_invalid_transaction_number_error
,mid_check_payment.status_notbusiness_hour_number_error
,mid_check_payment.status_invalid_priceoramount_error
,mid_check_payment.status_field_or_parameter_approval_error
,action_payment
);




module.exports = router;