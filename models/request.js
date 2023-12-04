const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  type: String,
  endpoint: String,
  requestData: Object,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

requestSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
})

module.exports = mongoose.model('Request', requestSchema)