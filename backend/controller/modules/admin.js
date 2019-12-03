const admin_model = require('../../model/adminschema')

let retrieve_admin = (req,res) => {
    
    var user = req.body.username
    var pass = req.body.password
    admin_model.findOne({ username: user }, function(err, data){
        if (err){
            res.send(err)
        }
        if(data != null){
            var match = bcrypt.compareSync(pass, data.password)
                if(match){
                    var acc_token = jwt.sign({ data },"token1234", {expiresIn: "12h"})
                    res.send({
                        status: true,
                        auth: true,
                        user: data,
                        token: acc_token
                    })
                }else{
                    res.send({
                        status: false,
                        auth: false,
                        sms: "Incorrect Password!!"
                    })
                }
            }
                res.send({
                    status: false,
                    auth: false,
                    sms: "Username not found!!"
                })
    })
}

module.exports = { retrieve_admin }