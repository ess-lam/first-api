const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.get('/:nbOfMessages', messageController.retrieve)
router.post('/', messageController.send)


module.exports = router;