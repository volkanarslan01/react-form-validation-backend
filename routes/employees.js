const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../data/employess.json");

// ? different use to

router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      username: "pastafw",
      hobbies: ["sleep", "Computer Gaming"],
    });
  })
  .put((req, res) => {
    res.json({
      username: req.body.username,
      hobbies: req.body.hobbies,
    });
  })
  .delete((req, res) => {
    res.json({ id: 2 });
  });

router.route("/:id").put((req, res) => {
  res.json({ id: req.params.id });
});
module.exports = router;
