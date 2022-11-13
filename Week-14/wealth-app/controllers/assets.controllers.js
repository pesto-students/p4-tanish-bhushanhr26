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
