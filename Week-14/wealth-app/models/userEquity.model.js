import mongoose from "mongoose";

const userEquity = new mongoose.Schema({
  assets: {
    type: String,
  },
  equity: {
    type: String,
  },
  fixedIncome: {
    type: String,
  },
  alternatives: {
    type: Number,
  },
});

const equity = mongoose.model("assets", userEquity);

export default equity;
