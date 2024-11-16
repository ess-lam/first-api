const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.get('/since/:theDate', messageController.retrieveSince)

router.get('/:nbOfMessages', messageController.retrieve)

router.post('/', messageController.send)

router.post('/respond', messageController.respond)


module.exports = router;