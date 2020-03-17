const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  userID: { type: String, required: true },
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  businessname: { type: String, required: true },
  state: { type: String, required: true },
  timeinbusiness: { type: String, required: true },
  reasonforfunding: { type: String, required: true },
  howdidyouhearaboutus: { type: String, required: true },
  comments: { type: String, required: true },
  phone: { type: Number, required: true },
  amountseeking: { type: Number, required: true },
  monthlysales: { type: Number, required: true },
  estimatedcreditscore: { type: Number, required: true },
  consent: { type: Boolean, required: true },
  date: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;