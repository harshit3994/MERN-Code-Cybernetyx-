var Task = require("../model/Task.js");

// Creating new task
module.exports.setRoutes = function(app) {
  //Create Task
  app.post("/createTask", (req, res) => {
    const task = new Task({
      taskname: req.body.taskname,
      taskdescription: req.body.taskdescription
    });

    task.save(function(err) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json({ msg: "Task Created successfully" });
    });
  });

  //Update the task whether it is done
  app.put("/updateTask/:id", (req, res) => {
    Task.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
      err,
      task
    ) {
      if (err) return res.status(404).json(err);
      res.status(200).json({ msg: "Task udpated." });
    });
  });

  app.get("/getTask", (req, res) => {
    Task.find()
      .sort({ createdAt: -1 })
      .then(tasks => {
        console.log(tasks);
        res.status(200).json(tasks);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
};
