const reservations = require('../models').reservations_model;
module.exports = {

    list(req, res) {
        return reservations
            .findAll({})
            .then((reservations) => res.status(200).send(reservations))
            .catch((error) => { res.status(400).send(error); });
    },


}