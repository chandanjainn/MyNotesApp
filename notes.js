const fs = require("fs");
const chalk = require("chalk");

function loadNotes() {
  try {
    return JSON.parse(fs.readFileSync("./notes.json").toString());
  } catch (error) {
    return [];
  }
}

function addNotes(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse("Note Added!"));
  } else {
    console.log(chalk.yellow.inverse("Note Title taken!"));
  }
  saveNotes(notes);
}

// function deleteNote(title) {
// 	const notes = loadNotes();
// 	const notesToKeep = notes.filter(note => {
// 		return note.title !== title;
// 	});
// 	saveNotes(notesToKeep);
// }

function saveNotes(notes) {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
}

function getNotes(title) {
  const notes = loadNotes();
  const noteToBeRead = notes.find(
    (note) =>
      note.title.toString().toLowerCase() === title.toString().toLowerCase()
  );
  if (noteToBeRead) {
    console.log(chalk.blue.inverse("Title:-", noteToBeRead.title));
    console.log(chalk.blue.inverse("Body:-", noteToBeRead.body));
  } else {
    console.log(chalk.yellow.inverse("No such note exists"));
  }
}

function listNotes() {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.red.inverse("Notes List Empty"));
  } else {
    console.log(chalk.green.inverse("My notes List"));
    notes.forEach((element, index) =>
      console.log(
        chalk.blue.inverse(index + 1 + ".", element.title, "-", element.body)
      )
    );
  }
}

function deleteNote(title) {
  const notes = loadNotes();
  const noteToBeDeleted = notes.find(
    (note) =>
      note.title.toString().toLowerCase() === title.toString().toLowerCase()
  );
  if (!noteToBeDeleted) {
    console.log(chalk.yellow.inverse("No such note exists"));
  } else {
    notes.splice(notes.indexOf(noteToBeDeleted), 1);
    console.log(chalk.red.inverse("Note Deleted"));
  }
  saveNotes(notes);
}

module.exports = { getNotes, addNotes, deleteNote, listNotes };
