const mongoose = require('mongoose');
const Schema = mongoose.Schema

const messageSchema = new Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
},{ 
  timestamps: true 
})

// messageSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// })

// messageSchema.methods.getRecentMessages = function (nbOfMessages) {

// }

module.exports = mongoose.model('Message', messageSchema)