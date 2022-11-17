const maongoose = require("mongoose");

module.exports.userSchema = maongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});
