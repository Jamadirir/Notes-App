const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('yargs')
const { removeNote } = require('./notes')
const { listNotes } = require('./notes')
const { readNote } = require('./notes')

//Create Add Command
yargs.command({
    command: 'add',
    describe: 'add a new note!',
    builder: {
        title: {
            describe: 'add title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'add body!',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => notes.addNotes(argv.title, argv.body)
})

//Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'remove the note',
    builder: {
        title: {
            describe: 'remove the title!',
            demandOption: true,
            type: 'String'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

//Create List Command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: (argv) => notes.listNotes()
})

//Create Read Command
yargs.command({
    command: 'read',
    describe: 'read the note',
    builder: {
        title: {
            describe: 'read the title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
})

// console.log(yargs.argv)
yargs.parse()