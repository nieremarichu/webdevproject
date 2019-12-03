const route_model = require('../../model/route')

let update_route = (req, res) => {
    console.log(req.body)
    route_model.findOneAndUpdate(
        {route: req.body}, //condition
        {places: req.body}, //new data
        //{upsert:true} || {new:true},
        (err, data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )
}

let update_places = (req,res) => {
    console.log(req.body)
    route_model.findOneAndDelete(
        {places: req.body},
        {route: req.body},
        (err,data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )
}

module.exports = { update_route, update_places }