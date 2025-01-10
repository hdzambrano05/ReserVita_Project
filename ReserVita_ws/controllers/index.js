const usersController = require('./usersController');
const roomsController = require('./roomsController');
const resourcesController = require('./resourcesController');
const availabilityController = require('./availabilityController');
const notificationsController = require('./notificationsController');
const reservationsController = require('./reservationsController');

module.exports = {
    usersController,
    roomsController,
    resourcesController,
    availabilityController, 
    reservationsController,
    notificationsController,
};
