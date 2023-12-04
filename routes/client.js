const express = require('express');
const requestController = require('../controllers/requestController');

const router = express.Router();

router.get('/', requestController.index)

router.get('/request', requestController.index_get)
router.post('/request', requestController.index_post)
router.put('/request', requestController.index_put)
router.patch('/request', requestController.index_patch)
router.delete('/request', requestController.index_delete)


module.exports = router;