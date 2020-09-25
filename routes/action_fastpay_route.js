const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");

const {action_datafeed} = require("../controllers/action_fastpay_controller");



router.post('/datafeed'
,action_datafeed
);



router.get('/datafeed'
,action_datafeed
);












module.exports = router;