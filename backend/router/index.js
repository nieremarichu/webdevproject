const express = require("express");
const routes = express.Router();

//importing modules
const create = require('../controller/modules/create')
const dlt = require('../controller/modules/delete')
const retrieve = require('../controller/modules/retrieve')
const update = require('../controller/modules/update')

//creating routes
routes.route("/createroute").post((req, res) => {
    create.create_route(req,res);
})

// routes.route("/createplaces").post((req,res) => {
//     create.create_places(req,res);
// })

//deleting routes
routes.route("/deleteroute/:id").delete((req,res) => {
    dlt.delete_route(req,res);
})

routes.route("/deleteplaces/:id").delete((req,res) => {
    dlt.delete_places(req,res);
})

//retrieving routes
routes.route("/retrieveAll").get((req,res) => {
    retrieve.retrieveAll_route(req,res);
})

//updating routes
routes.route("/updateroute/:id").post((req,res) => {
    update.update_route(req,res);
})

routes.route("/updateplaces/:id").post((req,res) => {
    update.update_places(req,res);
})

routes.post('/admin', (req, res) => {
    // console.log(req.body)
    var user = req.body.username
    var pass = req.body.password
    Admin.findOne({ username: user }, function(err, data){
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
});


//exporting routes
module.exports = routes