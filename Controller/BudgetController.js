const Budget = require("../Models/budget");

const createBudget = async (req, res) => {
    console.log(req.body);
    let createdby = req.body.createdby;
    let bid = req.body.bid;
    let name = req.body.name;
    let limit = req.body.limit;
    let color = req.body.color;

    let budget = new Budget({
        createdby,
        bid,
        name,
        limit,
        color
      });
      budget
        .save()
        .then((budget) => {
          res.status(200).json({
            code: 200,
            message: "Budget added successfully",
            budget
          });
        })
        .catch((error) => {
          res.status(500).json({
            code: 500,
            error,
            message: "error occured",
          });
        });
  return;
}


const deleteBudget = async (req, res) => {
    let budgetId = req.body.bid; // Assuming you're passing the budget ID as a URL parameter
    console.log(req.body)
    
    try {
        const budget = await Budget.findOne({ bid: budgetId });
        
        if (!budget) {
            return res.status(404).json({
                code: 404,
                message: "Budget not found",
            });
        }
        
        await Budget.deleteOne({ bid: budgetId });
        
        return res.status(200).json({
            code: 200,
            message: "Budget deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            error: error.message,
            message: "An error occurred while deleting the budget",
        });
    }
}

const fetchBudget = async (req, res) => {
    console.log(req.body);
    let createdby = req.body.createdby
    await Budget.find({createdby}).then((budgets) => {
        console.log(budgets);
        res.status(200).json(budgets);
    }).catch((error) => {res.status(201).json({
        code: 201,
        message: "User not found",
    });});
    return;
}

module.exports ={
  createBudget,
  deleteBudget,
  fetchBudget
}