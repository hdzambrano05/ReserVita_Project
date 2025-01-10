const express = require('express');
const router = express.Router();

const roomsController = require('../controllers').roomsController;

router.get('/', roomsController.list);

module.exports = router; 