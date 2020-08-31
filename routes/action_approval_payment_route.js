const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");
const mid_auth = require("../middleware/auth_middle");
const action_approval_payment = require("../controllers/action_approval_payment_controller");





router.post('/approval',
mid_data.data_mid,
mid_auth.check_auth,
action_approval_payment.action_approval
);




router.post('/payment',
mid_data.data_mid

);











module.exports = router;