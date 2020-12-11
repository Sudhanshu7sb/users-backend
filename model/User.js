var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;
var userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: String,
    },
    phoneNumber : {
        type:Number,
        required:true,
        unique:true,
    },
    dob: {
        type:String,
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.password && this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      return next();
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.verify = async function (password) {
  return await bcrypt.compare(password, this.password);
};

var User = mongoose.model("User", userSchema);

module.exports = User;
