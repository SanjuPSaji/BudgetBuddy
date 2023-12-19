const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema(
  {
    createdby: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    bid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    limit: {
        type: Number,
        required: true,
        trim: true,
    },
    color: {
      type: String,
    },
},
  { timestamps: true } //data updation timestamp
);

const Budget = mongoose.model("Budget", budgetSchema);
module.exports = Budget;