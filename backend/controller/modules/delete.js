const route_model = require('../../model/route')

let delete_route = (req, res) => {
    route_model.findOneAndDelete(
        {_id: req.params.id}, //condition
        (err, data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )
}

let delete_places = (req,res) => {
    route_model.findOneAndDelete(
        {_id: req.params.id},
        (err,data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )

}
module.exports = { delete_route, delete_places }