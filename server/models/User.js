const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },

  //references alreday created journal attached to the user id 
  journal: {
    type: Schema.Types.ObjectId,
    ref: "Journal",
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
