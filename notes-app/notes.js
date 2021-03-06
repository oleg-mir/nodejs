const fs = require('fs')
const chalk = require('chalk');

console.log('--------notes.js-----------')

const addNote = (title,body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=>note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes) 

        console.log(chalk.green('New note was added!'))
    }else{
        console.log(chalk.red('Title already exists!'))
    }
}

const removeNote = (title)=>{
    console.log('Going to remove a note: '+title)
    const notes = loadNotes()

    const notesAfterRemoval = notes.filter(note => note.title !== title)    

    if(notesAfterRemoval.length < notes.length){
        saveNotes(notesAfterRemoval)
        console.log(chalk.green('Note Removed!'))
    }else{
        console.log(chalk.red('Note NOT found!'))
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        console.log('Error: '+e)
        return []  
    }
}

const listNotes = ()=>{
    console.log(chalk.blue('Your Notes!'))
    const allNotes = loadNotes();
    allNotes.forEach(note=>console.log(note.title))
}

const readNote = (title)=>{
    const noteToRead = loadNotes().find(note => note.title === title);

    if(noteToRead){
        console.log(chalk.inverse(noteToRead.title))
        console.log(chalk.blue(noteToRead.body))
    }else{
        console.log(chalk.red('Note not found.'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}