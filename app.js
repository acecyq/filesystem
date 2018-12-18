var yargs = require('yargs');
var _ = require('lodash');
var notes = require('./notes.js');

var argv = yargs.argv;

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
        if (argv.title && argv.body) { 
            notes.addNote(argv.title, argv.body);
        } else {
            console.log('Adding note failed. Please indicate title and body.');
        }
        break;
    case 'fetch':
        console.log('fetching all notes...');
        notes.fetchNotes();
        break;
    case 'delete':
        console.log('deleting note...');
        if (argv.title) {
            notes.deleteNote(argv.title);
        } else {
            console.log('Deleting note failed. Please indicate title');
        }
        break;
    default:
        console.log('command undefined');
}