var fs = require('fs');

var rfs = fs.readFileSync;
var wfs = fs.writeFileSync;

function saveNote(title, body) {
    var note = [{
        title,
        body
    }];
    console.log('NOTE IS: ', note);
    wfs('notes.json', JSON.stringify(note));
    console.log('Note is successfully created.');
}

module.exports = {
    saveNote
}