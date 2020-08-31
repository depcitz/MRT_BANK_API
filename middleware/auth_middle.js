

const util_res_error = require("../utils/util_res_error");


exports.check_auth = (req, res, next) => {

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const real_user = "userman:passman";
    const user = `${username}:${password}`;


    if (!(real_user == user)) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    } else {
        console.log("asdkpaksdp")
       res.send(util_res_error.json_error_approval(req.body,1,"ald[paldpsl[p")) 
    }
}


