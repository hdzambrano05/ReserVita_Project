const rooms = require('../models').rooms_model;
module.exports = {

    list(req, res) {
        return rooms
            .findAll({})
            .then((rooms) => res.status(200).send(rooms))
            .catch((error) => { res.status(400).send(error); });
    },


}