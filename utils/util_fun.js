
let date = require('date-and-time');

exports.show_log_res = (obj) => {
    try {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Res Data ${timestamp} =>  ${JSON.stringify(obj)}`)
    } catch (error) {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Res Data ${timestamp} =>  `)
    }


}

exports.show_log_req = (obj) => {
    try {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Req Data ${timestamp} =>  ${JSON.stringify(obj)}`)
    } catch (error) {
        let timestamp = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        return console.log(`Req Data ${timestamp} => `)
    }


}
