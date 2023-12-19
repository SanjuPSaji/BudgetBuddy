const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    createdby: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    eid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
    },
    bid: {
      type: String,
      required: true,
    },
},
  { timestamps: true } //data updation timestamp
);

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;