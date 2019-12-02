const route_model = require('../../model/route')

let update_route = (req, res) => {
    route_model.findOneAndUpdate(
        {}, //condition
        {}, //new data
        //{upsert:true} || {new:true},
        (err, data) => {

        }
    )
}

module.exports = { update_route }