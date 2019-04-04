const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/studentenwerk", (req, res) => {
  res.render("pages/studentenwerk");
});

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
