const RequestModel = require('../models/request');

exports.index = async(req, res, next) => {
  try {
    const allRequestInstances = await RequestModel.find();
    res.status(201).send(allRequestInstances)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

}

exports.index_get = (req, res, next) => {
  saveRequest(req, res); 
};

exports.index_post = (req, res, next) => { 
  saveRequest(req, res); 

}

exports.index_put = (req, res, next) => { 
  saveRequest(req, res); 

}

exports.index_patch = (req, res, next) => { 
  saveRequest(req, res); 

}

exports.index_delete = (req, res, next) => { 
  saveRequest(req, res); 
  
  // to delete all documents 
  // try {
  //   const deleted = await RequestModel.deleteMany();
  //   res.status(201).json(deleted)
  // } catch (err) {
  //   res.status(400).json({ message: err.message })
  // }
}

async function saveRequest(req, res) {
  const requestInstance = new RequestModel({
    type: req.method,
    endpoint: req.originalUrl,
  });

  try {
    const requestSaved = await requestInstance.save();
    res.status(201).json(requestSaved)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}