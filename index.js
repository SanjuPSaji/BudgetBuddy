//basic server

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthRoute = require('./Routes/AuthRoute')
const BudgetRoute = require('./Routes/BudgetRoute')
const ExpenseRoute = require('./Routes/ExpenseRoute')

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/expense", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// mongoDB database connection error handing

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("database connection done");
});

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  // allowedHeaders:("Content-type ,authorization"),
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/auth", AuthRoute);
app.use("/api/budget", BudgetRoute);
app.use("/api/expense", ExpenseRoute);

const PORT = process.env.PORT || 3000;

// Server listening port

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});