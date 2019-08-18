const getNotes=require('./notes.js')
const chalk=require('chalk')
const log = console.log
const yargs = require('yargs')

yargs.version('0.9')

//add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler: function(){
        log('Adding a new note!')
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:'Remove a Note',
    handler: function(){
        log('Removing the note!')
    }
})

//list command
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler: function(){
        log('Listing all the notes')
    }
})

//read command
yargs.command({
    command:'read',
    describe:'Reading the note',
    handler: function(){
        log('Reading the note')
    }
})

log(yargs.argv)