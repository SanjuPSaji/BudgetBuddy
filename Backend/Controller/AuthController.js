const User = require("../Models/user");

const signup = async (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    const exists = await User.exists({ email });
    if (exists) {
      res.status(200).json({
        code: 404,
        message: "User already exists",
      });
    } else {
        let user = new User({
            name,
            email,
            password
          });
          user
            .save()
            .then((user) => {
              res.status(200).json({
                code: 200,
                message: "user added successfully",
              });
            })
            .catch((error) => {
              res.status(500).json({
                code: 500,
                error,
                message: "error occured",
              });
            });
    }
  return;
}

const login = async (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    await User.findOne({ email}).then((user) => {
        if (user.password === password) {
            res.status(200).json(user);
        }
    }).catch((error) => {res.status(201).json({
        code: 201,
        message: "User not found",
    });});
    return;
}

const updateAccount = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);


  try {
    // First, find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        code: 404,
        message: "User not found",
      });
    }

    // Check if the provided password matches the stored password
    if (user.password !== password) {
      return res.status(401).json({
        code: 401,
        message: "Unauthorized - password doesn't match",
      });
    }

    // If the password matches, update the user's data
    await User.findOneAndUpdate({ email }, { $set: req.body }, { new: true });

    return res.status(200).json({
      code: 200,
      message: "User account updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};


module.exports ={
    signup,
    login,
    updateAccount,
    
}