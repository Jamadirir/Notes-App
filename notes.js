const fs = require('fs')
const chalk = require('chalk')

//adding note function
const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.bold('new note registered'))
    } else {
        console.log(chalk.bgRed.bold('note title has been taken!'))
    }

}

//Removing note function
const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)
    if (notes.length > keepNotes.length) {
        saveNotes(keepNotes)
        console.log(chalk.bgGreen.bold('Note removed!'))
    } else {
        console.log(chalk.bgRed('No note found'))
    }

}

//saving note function
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

//List note function
const listNotes = () => {
    console.log(chalk.bgGreen.bold('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

//Read note function
const readNote = (title) => {

    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if (findNote) {
        console.log(chalk.bgCyan(findNote.title), findNote.body)
    } else {
        console.log(chalk.bgRed.bold('No note found!'))
    }

}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}