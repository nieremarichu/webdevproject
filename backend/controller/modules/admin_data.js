
const Admin_Model = require('../../model/adminschema')

let retrieve_admin = (req, res) => {
    console.log(req.body.username)
    Admin_Model.find({}, (err, data) => {
        if (err) {
            return res.send(err)
            //console.log("account not found");
        }
        else {
            return res.send(data)
        }
    })
}

module.exports = { retrieve_admin }