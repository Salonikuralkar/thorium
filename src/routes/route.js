const logger=require('../logger/logger1')//importing logger module in route module
const helper=require('../util/helper')//importing helper module
const formatter=require('../validator/formatter')//importing formatter module
const lodash=require('lodash')
const express=require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.printMsg(" Welcome to my application. I am Saloni and a part of FunctionUp Thorium cohort!")
    helper.date();
    helper.month();
    helper.batch();
    console.log(formatter.trim('        functionUp          '));
    console.log(formatter.lowercase('funCTIionUp'));
    console.log(formatter.uppercase('functionUp'));
    res.send('My first ever api!')
    
});
router.get('/hello', function (req, res) {
console.log(lodash.chunk(['JAN', 'FEB', 'MAR', 'APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'], 3))
console.log(lodash.tail([1,3,5,7,9,11,13,15,17,19]))
console.log(lodash.union([2], [1, 2],[3,3,4,2],[9,8,4,3],[1,1,2,2,3]))
console.log(lodash.fromPairs([['horror','The_Shining'],['drama','Titanic'],['thriller','Shutter_Island'],['fantasy','Pans_Labyrinth']]))

 res.send('My message ')
});


//router.get('/print-msg', function (req, res) {
    //obj.printMsg("My message on json!")
    //console.log(obj.endpoint)
     //   res.send('My message ')
//});

module.exports = router;