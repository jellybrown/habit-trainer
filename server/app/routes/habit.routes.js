module.exports = app => {
  const habit = require('../controller/habit.controller.js');
  const router = require('express').Router();

  router.post("/", habit.create);
  router.get("/", habit.findAll);
  router.get("/published", habit.findAllPublished);
  router.get("/:id", habit.findOne);
  router.put("/:id", habit.update);
  router.delete("/:id", habit.delete);
  router.delete("/", habit.deleteAll);
  app.use('/api/habit', router);
}
