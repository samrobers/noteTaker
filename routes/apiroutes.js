const app = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

app.get("/api/notes", (req, res) => {
  res.json(db);
});

app.post("/api/notes", (req, res) => {
  req.body.id = uuidv4();
  db.push(req.body);
  fs.writeFileSync("./db/db.json", JSON.stringify(db, null, 2));
  res.json(db);
});
//:id request parameter, alike template literal but for api
app.delete(`/api/notes/:id`, (req, res) => {
  console.log(req.params.id);
  db = db.filter((note) => {
    note.id != req.params.id;
  });
  fs.writeFileSync("./db/db.json", JSON.stringify(db, null, 2));
  res.json(db);
});

// get-read, post-create, put-update, delete-delete
// CRUD create, read, update, delete

module.exports = app;
