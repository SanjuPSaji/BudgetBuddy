const express = require('express')
const router = express.Router()

const ExpenseController = require('../Controller/ExpenseController')


router.post('/createExpense', ExpenseController.createExpense)
router.post('/fetchExpense', ExpenseController.fetchExpense)
router.post('/deleteExpense' , ExpenseController.deleteExpense)
module.exports = router