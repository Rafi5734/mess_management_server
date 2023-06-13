import expressHandler from "express-async-handler";
import DepositList from "../models/depositList.js";

const postDepositList = expressHandler(async (req, res) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const newDeposit = await DepositList.insertMany({
    date: `${day}/${month}/${year}`,
    name: req.body.name,
    deposit_amount: req.body.deposit_amount,
    extra_amount: req.body.extra_amount,
    get_amount: req.body.get_amount,
  });

  // console.log(req.body);

  if (!newDeposit) {
    res.status(500).json({ message: "New deposit not added" });
  } else {
    res.status(200).json(newDeposit);
  }
});

const getDepositList = expressHandler(async (req, res) => {
  const depositList = await DepositList.find();

  if (!depositList) {
    res.status(500).json({ message: "deposit list not found" });
  }
  res.status(200).json(depositList);
});

const getOneDepositList = expressHandler(async (req, res) => {
  const oneDepositList = await DepositList.findById(req.params.id);

  if (!oneDepositList) {
    res.status(500).json({ message: "deposit list not found" });
  }
  res.status(200).json(oneDepositList);
});

const updateOneDepositList = expressHandler(async (req, res) => {
  const currentDate = new Date();
  // const day = currentDate.getDate();
  // const month = currentDate.getMonth() + 1;
  // const year = currentDate.getFullYear();
  const updateDepositList = await DepositList.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      deposit_amount: req.body.deposit_amount,
      extra_amount: req.body.extra_amount,
      get_amount: req.body.get_amount,
    },
    {
      new: true,
    }
  );

  if (!updateDepositList) {
    res.status(500).json({ message: "deposit list not updated" });
  } else {
    res.status(200).json(updateDepositList);
  }
});

const deleteOneDepositList = expressHandler(async (req, res) => {
  const oneDepositListDelete = await DepositList.findByIdAndDelete(
    req.params.id
  );

  if (!oneDepositListDelete) {
    res.status(500).json({ message: "deposit list not deleted" });
  }
  res.status(200).json(oneDepositListDelete);
});

const deleteManyDepositData = expressHandler(async (req, res) => {
  try {
    const idsToDelete = req.body;

    const result = await DepositList.deleteMany({ _id: { $in: idsToDelete } });

    console.log(result);

    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Data deleted successfully." });
    } else {
      res.status(404).json({ message: "No data found for deletion." });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({
      message: "An error occurred while deleting the data.",
    });
  }
});




export {
  postDepositList,
  getDepositList,
  getOneDepositList,
  updateOneDepositList,
  deleteOneDepositList,
  deleteManyDepositData,
};
