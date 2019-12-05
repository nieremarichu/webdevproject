const route_model = require('../../model/route')

let create_route =  (req, res) => {
    let route = new route_model(req);
    route.save((err, data) => {
        if (err) {
            return res.send(err)
        }
        
        else {
            return res.send(data)
        }
    })
}

module.exports = { create_route } 