import expressHandler from "express-async-handler";
import BazarList from "../models/bazarList.js";

const postBazarList = expressHandler(async (req, res) => {
  const newBazar = await BazarList.insertMany({
    date: req.body.date,
    name: req.body.name,
    amount: req.body.amount,
    given_amount: req.body.given_amount,
    return_amount: req.body.return_amount,
  });

  // console.log(req.body);

  if (!newBazar) {
    res.status(500).json({ message: "New bazar not added" });
  } else {
    res.status(200).json(newBazar);
  }
});

const getBazarList = expressHandler(async (req, res) => {
  const bazarList = await BazarList.find();

  if (!bazarList) {
    res.status(500).json({ message: "bazar list not found" });
  }
  res.status(200).json(bazarList);
});

const getOneBazarList = expressHandler(async (req, res) => {
  const oneBazarList = await BazarList.findById(req.params.id);

  if (!oneBazarList) {
    res.status(500).json({ message: "bazar list not found" });
  }
  res.status(200).json(oneBazarList);
});

const updateOneBazarList = expressHandler(async (req, res) => {
  const updateBazarList = await BazarList.findByIdAndUpdate(
    req.params.id,
    {
      date: req.body.date,
      name: req.body.name,
      amount: req.body.amount,
      given_amount: req.body.given_amount,
      return_amount: req.body.return_amount,
    },
    {
      new: true,
    }
  );

  if (!updateBazarList) {
    res.status(500).json({ message: "bazar list not updated" });
  } else {
    res.status(200).json(updateBazarList);
  }
});

const deleteOneBazarList = expressHandler(async (req, res) => {
  const oneBazarListDelete = await BazarList.findByIdAndDelete(req.params.id);

  if (!oneBazarListDelete) {
    res.status(500).json({ message: "bazar list not deleted" });
  }
  res.status(200).json(oneBazarListDelete);
});

export {
  postBazarList,
  getBazarList,
  getOneBazarList,
  updateOneBazarList,
  deleteOneBazarList,
};
