const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var ip = require('ip');
var cors = require('cors')
const config = require("./config/env");
const port = config.main_config.PORT




app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => { console.log(ip.address() + "  =>" + 'Start server API BANK at port ' + port) });



const action_n23_approval_payment = require('./routes/action_n23_approval_payment_route');
const action_n24_approval_payment = require('./routes/action_n24_approval_payment_route');




app.use('/n23/status', action_n23_approval_payment);
app.use('/n24/status', action_n24_approval_payment);
