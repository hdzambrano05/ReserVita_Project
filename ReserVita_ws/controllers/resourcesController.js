const resources = require('../models').resources_model;
module.exports = {

    list(req, res) {
        return resources
            .findAll({})
            .then((resources) => res.status(200).send(resources))
            .catch((error) => { res.status(400).send(error); });
    },


}