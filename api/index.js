const express = require("express");
const cors = require("cors");
const validateRole = require("./role-validator");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  const { role } = req.body;

  if (!role) {
    res.status(401).send({
      email: "",
      password: "",
    });
    res.end();
  }

  const isValidRole = validateRole(role);

  if (!isValidRole) {
    res.status(401).send({ email: "", password: "" });
    res.end();
  } else {
    res.send({ email: "sus", password: "sus" });
  }
});

module.exports = app;
