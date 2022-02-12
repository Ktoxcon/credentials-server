const cors = require("cors");
const express = require("express");
const getCredentials = require("./credentials");
const validateRole = require("./role-validator");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/api", (req, res) => {
  const { role } = req.body;

  if (!role) {
    res.status(401).send({
      error: `Expected role, got ${role}`,
    });
    res.end();
  }

  const isValidRole = validateRole(role);

  if (!isValidRole) {
    res.status(401).send({ email: "", password: "" });
    res.end();
  } else {
    const credentials = getCredentials();
    res.send({ ...credentials });
  }
});

module.exports = app;
