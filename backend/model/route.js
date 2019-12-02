var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var routeSchema = new Schema({
      route: String,
      places: String

  })

  module.exports = mongoose.model('Jeep', routeSchema);