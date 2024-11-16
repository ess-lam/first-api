const Message = require('../models/message')

exports.retrieveSince = async (req, res, next) => {
  try {
    const messages = await Message.find({
      createdAt: { $gte: req.params.theDate }
    });
    res.status(200).json(messages); 

  } catch (error) {
    res.status(400).json({ message: error.message })
  }
  
}

// retrieve recent messages of specified limit
exports.retrieve = async (req, res, next) => {
  const recentMessages = await Message.find().
    limit(req.params.nbOfMessages).
    sort({ createdAt: -1 }).
    populate("responses").
    // select({ text: 1 , _id: 0}).
    exec();

    res.status(200).json(recentMessages);

  // try {
  //   const recentMessages = await Message.find().
  //   limit(req.params.nbOfMessages).
  //   sort({ createdAt: 1 }).
  //   select({ text: 1 }).
  //   exec();
  //   res.status(200).json(recentMessages)
  // } catch (error) {
  //   res.status(400).json({ message: error.message })
  // }
}
// send a message
exports.send = async (req, res, next) => {
  // res.send("hello from send middlware")
  const message = new Message({
    text: req.body.message,
  })

  try {
    const saved = await message.save()
    res.status(201).send(saved)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.respond = async (req, res, next) => {

  try {
    const msg = await Message.findById(req.body.msgId).populate("responses");
    msg.responses.push(req.body.resId);
    await msg.save();
    res.status(200).send(msg)
    
  } catch (error) {
    res.status(400).json({ message: error.message })
  }

}