const notes = require("express").Router();
// const { application } = require("express");
const uuid = require("../../helpers/uuid");
//const uuid = require("../../helpers/uuid");
const {
  readFromFile,
  readAndAppend,
  readAndDelete,
} = require("../../helpers/fsUtils");

// GET Route for retrieving all the notes
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    console.log(newNote);
    readAndAppend(newNote, "./db/db.json");
    res.json(`note added successfully`);
  } else {
    res.console.error(`Error in adding note`);
  }
});

//notes.delete("/:id", (req, res) => {});

module.exports = notes;
