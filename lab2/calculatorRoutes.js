const express = require('express');
const calculatorController = require('../controllers/calculatorController')
const router = express.Router();


router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})

router.get('/division', (req, res) => {
    calculatorController.divNumbers(req, res)
})


router.get('/multiplication', (req, res) => {
    calculatorController.multNumbers(req, res)

})

router.get('/subtract', (req, res) => {
    calculatorController.subNumbers(req, res)

})


module.exports = router;