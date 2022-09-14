//IMPORT STATMENTS

const express = require("express");
const User = require("./models/user");
const Company = require("./models/company");
const app = express();
const port = 5000;

//END OF IMPORT STATMENTS

//USERS

//CREATE A USER
app.get("/api/users/new", (req, res) => {
  const newUser = new User();
  res.status(201).json(newUser);
});

//END OF USERS

//COMPANIES

//CREATE A COMPANIES
app.get("/api/companies/new", (req, res) => {
  const newCompany = new Company();
  res.status(201).json(newCompany);
});

//END OF COMPANIES

//USERS AND COMPANIES

app.get("/api/user/company", (req, res) => {
  const newCompany = new Company();
  const newUser = new User();
  res.status(201).json({ newCompany, newUser });
});

//END OF USERS AND COMPANIES

const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
