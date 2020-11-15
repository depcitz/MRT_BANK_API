const express = require('express');
const router = express.Router();
const mid_data = require("../middleware/data_middle");
const mid_auth = require("../middleware/auth_middle");
const {
    action_add_qrcode
    ,action_cancel_qrcode
    ,action_checkpay_qrcode

} = require("../controllers/action_n23_qrcode_controller");


//N23

router.post('/add',
mid_data.data_mid,
action_add_qrcode
);



router.post('/cancel',
mid_data.data_mid,
action_cancel_qrcode
);


router.post('/checkpay',
mid_data.data_mid,
action_checkpay_qrcode
);













module.exports = router;