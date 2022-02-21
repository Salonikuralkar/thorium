let obj=require('./logger')//importing logger module in route module
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/print-msg', function (req, res) {
    obj.printMsg("My message on json!")
    console.log(obj.endpoint)
        res.send('My message ')
});

module.exports = router;