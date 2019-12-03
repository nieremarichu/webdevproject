const route_model = require('../../model/route')

let create_route = (req, res) => {
    // let route = new route_model(req.body);
    // route.save((err, data) => {
    //     if (err) {
    //         return res.send(err)
    //     }
    //     else {
    //         return res.send(data)
    //     }
    // })
    console.log(req.body)
    route_model.create({route: req.body}, 
        (err,data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
    })
}

let create_places = (req,res) => {
    console.log(req.body)
    route_model.insertOne({places: req.body}, 
        (err,data) => {
            if(err) {
                return res.send(err)
            }else {
                return res.send(data)
            }
    })
}

module.exports = { create_route, create_places } 