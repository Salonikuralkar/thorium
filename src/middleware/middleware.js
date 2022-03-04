const moment = require('moment');
const timestamp=function (req, res, next)
{
    var currentTimestamp = Date.now();    
    // console.log(moment(currentTimestamp).format("DD/MM/YYYY, h:mm:ss a")) 
    // console.log(req.path)
    // console.log(req.socket.localAddress)
    console.log(moment(currentTimestamp).format("DD/MM/YYYY, h:mm:ss a"),req.path,req.socket.localAddress)
    next();
}

module.exports.timestamp=timestamp