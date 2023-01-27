const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  contry: String,
  visa_id: String
});

const UserVisa = new mongoose.Schema({
  visa_id: String,
  typevisa: String,
  embassy: String,
  initial_date: Date,
  initial_status: String,
  status: String,
});




// compile model from schema
module.exports = mongoose.model("user", UserSchema);
