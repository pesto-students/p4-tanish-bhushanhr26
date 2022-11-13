import mongoose from "mongoose";

const userEquity = new mongoose.Schema({
  assets: {
    type: String,
    require: true,
  },
  equity: {
    type: String,
    require: true,
  },
  fixedIncome: {
    type: String,
    require: true,
  },
  alternatives: {
    type: Number,
    require: true,
  },
});

const equity = mongoose.model("assets", userEquity);

export default equity;
