const users = require('../models').users_model;
module.exports = {

    list(req, res) {
        return users
            .findAll({})
            .then((users) => res.status(200).send(users))
            .catch((error) => { res.status(400).send(error); });
    },


}