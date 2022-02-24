module.exports = app => {
    const videos = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    router.post("/", videos.create);
    router.get("/:id", videos.findOne);
    app.use('/api/videos', router);
}
