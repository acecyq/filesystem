var fs = require('fs');
var rfs = fs.readFileSync;
var rds = fs.readdirSync;

function createFile(object) {
    fs.writeFileSync('notes.json', JSON.stringify(object));
}

function saveNote(title, body) {
    var note = [{
        title,
        body
    }];
    createFile(note);
    console.log('Note is successfully created.');
}

function addNote(title, body) {
    var newNote, notesArray, files;
    newNote = {title, body}
    files = rds('./');
    if (files.includes('notes.json')) {
        notesArray = JSON.parse(rfs('notes.json', 'utf8'));
        if (notesArray.some(function(element) {
            return element.title === title;
        })) {
            console.log('Adding note fails...\nTitle already exists...');
        } else {
            notesArray.push(newNote);
            createFile(notesArray);
            console.log('Note is successfully added.');
        }
    } else {
        console.log('File notes.json does not exist...\nCreating file...');
        createFile(newNote);
        console.log('Note is successfully saved.');
    }
}

function fetchNotes() {
    var notesObject;
    notesObject = JSON.parse(rfs('notes.json', 'utf8'));
    console.log('Notes: ', JSON.stringify(notesObject, undefined, 2));
}

function deleteNote(title) {
    var notesArray, index;
    notesArray = JSON.parse(rfs('notes.json', 'utf8'));
    index = notesArray.findIndex(function(note) {
        return note.title === title;
    });
    if (index >= 0) {
        notesArray.splice(index, 1);
        createFile(notesArray);
        console.log('Note with title: ' + title + ', is now deleted.');
    } else {
        console.log('Note not found');
    }
}

module.exports = {
    saveNote,
    addNote,
    fetchNotes,
    deleteNote
}