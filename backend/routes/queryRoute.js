const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

router.post('/api/addQuery', queryController.addQuery);
module.exports = router;