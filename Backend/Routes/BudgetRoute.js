const express = require('express')
const router = express.Router()

const BudgetController = require('../Controller/BudgetController')

router.post('/createBudget', BudgetController.createBudget)
router.post('/fetchBudget', BudgetController.fetchBudget)
router.post('/deleteBudget' , BudgetController.deleteBudget)
module.exports = router