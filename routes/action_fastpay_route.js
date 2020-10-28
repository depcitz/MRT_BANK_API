const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");
const mid_check_fastpay = require("../middleware/check_fastpay_middle");
const {action_datafeed} = require("../controllers/action_fastpay_controller");



router.post('/datafeed'
,mid_check_fastpay.check_status_successcode
,action_datafeed
);



router.get('/datafeed'
,mid_check_fastpay.check_status_successcode
,action_datafeed
);












module.exports = router;