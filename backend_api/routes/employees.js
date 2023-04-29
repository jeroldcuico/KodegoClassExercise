var express = require("express");
var router = express.Router();

let employees = [
  {
    id: 1,
    firstName: "Juan",
    lastName: "Dela Cruz",
    age: 24,
    gender: "male",
    jobTitle: "Manager",
  },
  {
    id: 2,
    firstName: "Anna",
    lastName: "Salvador",
    age: 21,
    gender: "female",
    jobTitle: "Junior Dev",
  },
  {
    id: 3,
    firstName: "Mark",
    lastName: "Bautista",
    age: 28,
    gender: "male",
    jobTitle: "Senior Fullstack Dev",
  },
  {
    id: 4,
    firstName: "Micheal",
    lastName: "Garcia",
    age: 31,
    gender: "male",
    jobTitle: "CEO",
  },
];

//! Get All Employee
router.get("/", (req, res) => {
  res.send(employees);
});

//! Count
router.get("/count/all", (req, res) => {
  res.status(200).send({ count: employees.length });
});

//!Search
router.get("/search/:keyword", (req, res) => {
  const { keyword } = req.params;
  let list = employees.filter(
    (item) =>
      item.firstName.toLowerCase().includes(keyword) ||
      item.lastName.toLowerCase().includes(keyword)
  );
  res.status(200).send(list.length > 0 ? list : keyword + " is not found!");
});

//! Get Employee by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let employee = employees.find((e) => e.id === id);
  res.send(employee ?? "No employee found");
});

//!Profile Information Add

router.post("/:id", (req, res) => {
  let employee = {
    id: employees.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    jobTitle: req.body.jobTitle,
  };
  employees.push(employee);
  res.send(employee);
});

//!Profile Information Update

router.put("/:id", (req, res) => {
  let employee = employees.find((item) => item.id === Number(req.body.id));
  employee.firstName = req.body.firstName;
  employee.lastName = req.body.lastName;
  employee.age = req.body.age;
  employee.gender = req.body.gender;
  employee.jobTitle = req.body.jobTitle;
  res.send(employee);
});

//!Delete user by ID
router.delete("/:id", (req, res) => {
  const eid = req.body.id;
  employees = employees.filter((e) => e.id !== Number(eid));
  res.send( {message: `Employee with ID ${eid}} deleted` });
});

module.exports = router;