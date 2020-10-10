const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var ip = require('ip');
var cors = require('cors')
const config = require("./config/env");
const port = config.main_config.PORT
const pool = require("./config/db_con");
const util_res_error = require("./utils/util_res_error");
const code_error = require("./utils/code_error");



app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => { console.log(ip.address() + "  =>" + 'Start server API BANK at port ' + port) });






// API DIRECT LINK
const action_n23_approval_payment = require('./routes/action_n23_approval_payment_route');
const action_n24_approval_payment = require('./routes/action_n24_approval_payment_route');

app.use('/n23/status', action_n23_approval_payment);
app.use('/n24/status', action_n24_approval_payment);



app.use('/status/approval', (req, res,next) => {

  switch (req.body.comCode) {
    case "911208":  
      res.redirect(307,'/n23/status/approval');
      break;
    case "911209": 
      res.redirect(307,'/n24/status/approval');
      break;
    default:
        res.send(util_res_error.json_error_approval(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
      break;
  }
}
)



app.use('/status/payment', (req, res,next) => {

  switch (req.body.comCode) {
    case "911208":
      res.redirect(307,'/n23/status/payment');
      break;
    case "911209":   
      res.redirect(307,'/n24/status/payment');
      break;

    default:
        res.send(util_res_error.json_error_payment(req.body, code_error.status_other_error.respCode, code_error.status_other_error.respMsg))
      break;
  }
}
)


// API QRCODE
const action_n23_qrcode = require('./routes/action_n23_qrcode_route');
const action_n24_qrcode = require('./routes/action_n24_qrcode_route');
app.use('/n23/qrcode', action_n23_qrcode);
app.use('/n24/qrcode', action_n24_qrcode);



// API FAST_PAY
const action_fastpay = require('./routes/action_fastpay_route');
app.use('/api/pay', action_fastpay);






pool.connect().then(client => {
  return client.query('SELECT NOW()')
    .then(result => {
      client.release(true)
      console.log("connect database  success ")
    })
    .catch(err => {
      client.release(true)
      return console.error('Error executing query', err.stack)

    })
})

