

const util_res_error = require("../utils/util_res_error");
const code_error = require("../utils/code_error");
const config = require("../config/env");



exports.check_auth_approval = (req, res, next) => {

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.send(util_res_error.json_error_approval(
            req.body, code_error.status_invalid_auth_error.respCode, code_error.status_invalid_auth_error.respMsg))
    }
    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const real_user = `${config.main_config.AUTH_USER}:${config.main_config.AUTH_PASS}`;
    const user = `${username}:${password}`;


    if (!(real_user == user)) {
        res.send(util_res_error.json_error_approval(
            req.body, code_error.status_invalid_auth_error.respCode, code_error.status_invalid_auth_error.respMsg))
    } else {
        next();
    }
}



exports.check_auth_payment = (req, res, next) => {

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.send(util_res_error.json_error_payment(
            req.body, code_error.status_invalid_auth_error.respCode, code_error.status_invalid_auth_error.respMsg))
    }
    
    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const real_user = `${config.main_config.AUTH_USER}:${config.main_config.AUTH_PASS}`;
    const user = `${username}:${password}`;


    if (!(real_user == user)) {
        res.send(util_res_error.json_error_approval(
            req.body, code_error.status_invalid_auth_error.respCode, code_error.status_invalid_auth_error.respMsg))
    } else {
        next();
    }
}


