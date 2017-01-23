var mongoose = require('mongoose');

var EpicSchema - new mongoose.Schema({
  hero: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', UserSchema);