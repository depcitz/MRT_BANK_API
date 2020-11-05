
const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");
const mid_auth = require("../middleware/auth_middle");
const mid_check_approval = require("../middleware/check_approval_middle");
const {
    action_approval
} = require("../controllers/action_approval_controller");






router.post('/',  
mid_data.data_mid
,mid_check_approval.status_invalid_auth_error
,mid_check_approval.status_transaction_number_duplicate_number_error
,mid_check_approval.status_invalid_reference_error
,mid_check_approval.status_limit_invalid_priceoramount_error
,mid_check_approval.status_notbusiness_hour_number_error
,mid_check_approval.status_invalid_priceoramount_error
,mid_check_approval.status_field_or_parameter_approval_error
,action_approval
);




module.exports = router;