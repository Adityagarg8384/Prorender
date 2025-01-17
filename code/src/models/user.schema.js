const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    mobile: {
      type: Number,
      default: " ",
    },

    address: {
      type: String,
      default: " ",
    },
    registrationCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
