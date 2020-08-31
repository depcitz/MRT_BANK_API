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



const action_approval_payment = require('./routes/action_approval_payment_route');
//const action_payment = require('./routes/');




app.use('/api/status', action_approval_payment);

