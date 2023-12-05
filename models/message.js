const mongoose = require('mongoose');
const Schema = mongoose.Schema

const messageSchema = new Schema({
  messenger: String,
  text: String,
  responses: { 
    type: [mongoose.ObjectId], 
    ref: 'Message',
  },
},{ 
  timestamps: true 
})

// messageSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// })

// messageSchema.virtual('createdAtDate').get(function() {
//   const creationdate = new Date(this.createdAt)
//   return creationdate;
// })


module.exports = mongoose.model('Message', messageSchema)