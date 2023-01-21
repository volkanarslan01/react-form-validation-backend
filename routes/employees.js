const express = require("express");
const router = express.Router();

const employeesController = require("../controllers/employeesController");
// ? different use to

router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.postEmployees)
  .put(employeesController.putEmployees)
  .delete(employeesController.deleteEmployees);

router.route("/:id").get();
module.exports = router;
