const fs = require('fs')

console.log('--------notes.js-----------')
const getNotes = function(){
    return 'Your Notes...'
}


const addNote = function(title,body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

        console.log('New note was added!')
    }else{
        console.log('Title already exists!')
    }
}

const removeNote = function(title){
    console.log('Going to remove a note: '+title)
    const notes = loadNotes()

    const notesAfterRemoval = notes.filter(function(note){
        return note.title !== title
    })
    saveNotes(notesAfterRemoval)

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        console.log('Error: '+e)
        return []  
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}