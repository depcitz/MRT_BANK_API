const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");
const mid_auth = require("../middleware/auth_middle");
const {action_add_qrcode} = require("../controllers/action_n24_qrcode_controller");


//N24
router.post('/add',
mid_data.data_mid,
action_add_qrcode
);











module.exports = router;