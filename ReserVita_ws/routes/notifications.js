const express = require('express');
const router = express.Router();

const notificationsController = require('../controllers').notificationsController;

router.get('/', notificationsController.list);

module.exports = router;