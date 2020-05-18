const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
      type:Number,
      required:true,
      unique:true
  }
});

module.exports = User = mongoose.model('user', UserSchema);