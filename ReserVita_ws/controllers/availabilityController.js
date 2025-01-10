const availability = require('../models').availability_model;
module.exports = {

    list(req, res) {
        return availability
            .findAll({})
            .then((availability) => res.status(200).send(availability))
            .catch((error) => { res.status(400).send(error); });
    },


}