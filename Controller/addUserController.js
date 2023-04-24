import expressHandler from "express-async-handler";
import User from "../models/user.js";
const getUser = expressHandler(async (req, res) => {
  const users = await User.find();
  console.log(users.length);

  if (!users) {
    res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(users);
});
const postUser = expressHandler(async (req, res) => {
  const user = await User.insertMany({
    userName: req.body.userName,
    email: req.body.email,
    phone: req.body.phone,
    category: req.body.category,
    status: req.body.status,
    working_place: req.body.working_place,
    password: req.body.password,
  });

  if (!user) {
    res.status(500).json({ message: "User not inserted" });
  }
  res.status(200).json(user);
});

const getOneUser = expressHandler(async (req, res) => {
  const oneUser = await User.findById(req.params.id);

  if (!oneUser) {
    res.status(500).json({ message: "User not found" });
  }
  res.status(200).json(oneUser);
});

const updateUser = expressHandler(async (req, res) => {
  const userUpdate = await User.findByIdAndUpdate(
    req.params.id,
    {
      userName: req.body.userName,
      email: req.body.email,
      phone: req.body.phone,
      category: req.body.category,
      status: req.body.status,
      working_place: req.body.working_place,
      password: req.body.password,
    },
    {
      new: true,
    }
  );

  if (!userUpdate) {
    res.status(500).json({ message: "User Id don't match" });
  }
  res.status(200).json(userUpdate);
});
const deleteUser = expressHandler(async (req, res) => {
  const userDelete = await User.findByIdAndDelete(req.params.id);

  if (!userDelete) {
    res.status(500).json({ message: "User Id don't match" });
  } else {
    res.status(200).json({ message: "User delete successfully!" });
  }
});

export { getUser, postUser, getOneUser, updateUser, deleteUser };
