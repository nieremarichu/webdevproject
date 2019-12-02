const route_model = require('../../model/route')

let delete_route = (req, res) => {
    route_model.findOneAndUpdate(
        {}, //condition
        (err, data) => {

        }
    )
}

module.exports = { delete_route }