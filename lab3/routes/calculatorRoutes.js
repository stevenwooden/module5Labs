const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    // console.log(req.query)

    // res.send(req.query)
    // res.send('Add')
})

router.get('/division', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let quo = number1 / number2;
    console.log(quo)
    res.status(200)
    res.json({result:quo})
})


router.get('/multiplication', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let times = number1 * number2;
    console.log(times)
    res.status(200)
    res.json({result:times})

})

router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2;
    console.log(sub)
    res.status(200)
    res.json({result:sub})

})


module.exports = router;