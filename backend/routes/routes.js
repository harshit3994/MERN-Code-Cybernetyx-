var user = require("./users");
var task = require("./task");
var reminder = require("./reminder");

module.exports.setRoutes = function(app) {
  user.setRoutes(app);
  task.setRoutes(app);
  reminder.setRoutes(app);
};
