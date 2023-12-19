const Expense = require("../Models/expense");

const createExpense = async (req, res) => {
    console.log(req.body);
    let createdby = req.body.createdby;
    let eid = req.body.eid;
    let name = req.body.name;
    let amount = req.body.amount;
    let date = req.body.date;
    let bid = req.body.bid;

    let expense = new Expense({
        createdby,
        eid,
        name,
        amount,
        date,
        bid
      });
      expense
        .save()
        .then((expense) => {
          res.status(200).json({
            code: 200,
            message: "expense added successfully",
            expense
          });
        })
        .catch((error) => {
            console.log(error);
          res.status(500).json({
            code: 500,
            error,
            message: "error occured",
          });
        });
  return;
}


const deleteExpense = async (req, res) => {
    let expenseId = req.body.eid; //  you're passing the expense ID as a URL parameter
    console.log(req.body)
    
    try {
        const expense = await Expense.findOne({ eid: expenseId });
        
        if (!expense) {
            return res.status(404).json({
                code: 404,
                message: "Expense not found",
            });
        }
        
        await Expense.deleteOne({ eid: expenseId });
        
        return res.status(200).json({
            code: 200,
            message: "Expense deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            error: error.message,
            message: "An error occurred while deleting the error",
        });
    }
}

const fetchExpense = async (req, res) => {
    console.log(req.body);
    let createdby = req.body.createdby
    await Expense.find({createdby}).then((expenses) => {
        console.log(expenses);
        res.status(200).json(expenses);
    }).catch((error) => {res.status(201).json({
        code: 201,
        message: "User not found",
    });});
    return;
}



module.exports ={
    createExpense,
    fetchExpense,
    deleteExpense
  }