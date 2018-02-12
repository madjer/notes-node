console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);  
    if (note) {
        console.log(`Note Saved: \r\nTitle: ${argv.title} \r\nBody: ${argv.body}`)
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log(note.title);
        console.log(note.body);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    console.log(notes.removeNote(argv.title) ? 'Note removed' : 'Note not found' );
    
} else {
    console.log('Command not recognized!')
}