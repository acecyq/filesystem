var yargs = require('yargs');
var _ = require('lodash');
var notes = require('./notes.js');

var argv = yargs.argv;
console.log(argv);

// function saveNote(title, body) {
//     var note = [{
//         title,
//         body
//     }];
//     console.log('NOTE IS: ', note);
//     wfs('notes.json', JSON.stringify(note));
//     console.log('Note is successfully created.');
// }

switch(argv._[0]) {
    case 'save':
        console.log('saving note...');
        if (argv.title && argv.body) {
            notes.saveNote(argv.title, argv.body);
        } else {
            console.log('Saving note failed. Please indicate title and body.');
        }
        break;
    case 'add':
        console.log('adding notes...');
        try {
            var notesString = rfs('hello.json');
        }
        catch(err) {
            console.log('adding notes fail...');
            console.log(err);
        }
        break;
    default:
        console.log('command undefined');
}