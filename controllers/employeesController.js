const data = {
  employees: require("../model/employess.json"),
  setEmployees: function (data) {
    this.employees = data;
  },
};

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const postEmployees = (req, res) => {
  res.json({
    username: "Burak",
    hobbies: ["read a book", "not study"],
  });
};

const putEmployees = (req, res) => {
  res.json({
    username: "Burak",
    hobbies: ["read a book", "not study"],
  });
};

const deleteEmployees = (req, res) => {
  res.json({ id: 1 });
};

const getEmploye = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllEmployees,
  postEmployees,
  putEmployees,
  deleteEmployees,
  getEmploye,
};
