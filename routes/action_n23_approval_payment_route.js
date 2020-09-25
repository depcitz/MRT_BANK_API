const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");
const mid_auth = require("../middleware/auth_middle");
const mid_check_approval = require("../middleware/check_approval_middle");
const mid_check_payment = require("../middleware/check_payment_middle");
const action_approval_payment = require("../controllers/action_n23_approval_payment_controller");



//N23

router.post('/approval',
mid_data.data_mid
,mid_auth.check_auth_approval
,mid_check_approval.status_invalid_reference_error_n23
,mid_check_approval.status_invalid_priceoramount_error_n23
,mid_check_approval.status_notbusiness_hour_number_error
,mid_check_approval.status_invalid_priceoramount_error
,mid_check_approval.status_field_or_parameter_approval_error
,action_approval_payment.action_approval 
);



router.post('/payment',
mid_data.data_mid
,mid_auth.check_auth_payment
,mid_check_payment.status_invalid_reference_error_n23
,mid_check_payment.status_invalid_priceoramount_error_n23
,mid_check_payment.status_invalid_transaction_number_error_n23
,mid_check_payment.status_notbusiness_hour_number_error
,mid_check_payment.status_invalid_priceoramount_error
,mid_check_payment.status_field_or_parameter_approval_error
,action_approval_payment.action_payment
);











module.exports = router;