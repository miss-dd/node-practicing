const Video = require("../models/tutorial.models.js");
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Tutorial
    const video = new Video({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false
    });
    // Save Tutorial in the database
    Video.create(video, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    });
  };
  exports.findOne = (req, res) => {
    Video.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Video with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };