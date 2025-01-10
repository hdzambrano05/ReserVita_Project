const notifications = require('../models').notifications_model;
module.exports = {

    list(req, res) {
        return notifications
            .findAll({})
            .then((notifications) => res.status(200).send(notifications))
            .catch((error) => { res.status(400).send(error); });
    },


}