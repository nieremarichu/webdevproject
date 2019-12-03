const admin_model = require('../../model/adminschema')

let create_admin = (req,res) => {
    let admn = new admin_model(req,res);
    admn.save((err,data) => {
        if(err) {
            return res.send(err)
        }else{
            return res.send(data)
        }
    })
}
module.exports = { create_admin }