const express = require("express");
const routes = express.Router();

//importing modules
const create = require('../controller/modules/create')

//creating routes
routes.route("/route").post((req, res) => {
    create.create_route(req,res);
})

//exporting routes
module.exports = routes