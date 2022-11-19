import equity from "../models/userEquity.model.js";

export const userAssests = async (req, res) => {
  const { id } = req.params;
  try {
    const assets = await equity.findById(id);
    res.status(200);
    res.json(assets);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

export const updateUserAssests = async (req, res) => {
  const { id } = req.params;

  await equity
    .findByIdAndUpdate(id, {
      $set: {
        id: req.body.id,
        assets: req.body.assets,

        equity: req.body.equity,
        fixedIncome: req.body.fixedIncome,
        alternatives: req.body.alternatives,
      },
    })
    .then(() => {
      res.status(201);
      res.json({ message: message.res });
    })
    .catch((err) => {
      res.status(404);
    });
};
export const deleteUserById = (req, res) => {
  const { id } = req.params;
  const deletedUser = equity
    .findByIdAndDelete(id)
    .then(() => {
      res.status(201);
      res.json(deletedUser);
    })
    .catch((err) => {
      throw new Error(err);
    });
};
