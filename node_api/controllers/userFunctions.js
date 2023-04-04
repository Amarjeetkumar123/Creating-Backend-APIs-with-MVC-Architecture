import User from "../models/userModel.js";



export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  // console.log(req.query); // access all query given in url
  res.json({
    success: true,
    users,
  });
};

export const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("token", "token").json({
    success: true,
    message: "Register successfully",
  });
};


export const getUserDetails = async (req, res) => {
  // const { id } = req.body;
  // const { id } = req.query; // id passed as query in url

  const { id } = req.params;
  const user = await User.findById(id);

  res.send({
    success: true,
    user,
  });
};