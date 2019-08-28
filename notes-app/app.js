const notes=require('./notes.js')
const chalk=require('chalk')
const log = console.log
const yargs = require('yargs')

yargs.version('0.9')

//listNotes command
yargs.command({
    command:'listNotes',
    describe:'List all notes',
    handler(){
        notes.listNotes()
    }
})

//add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:'Remove a Note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'            
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler(){
        log('Listing all the notes')
    }
})

//read command
yargs.command({
    command:'read',
    describe:'Reading the note',
    handler(){
        log('Reading the note')
    }
})

yargs.parse()