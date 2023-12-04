const Message = require('../models/message')


exports.retrieve = async (req, res, next) => {
  const recentMessages = await Message.find().
    limit(req.params.nbOfMessages).
    sort({ createdAt: -1 }).
    select({ text: 1 , _id: 0}).
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
