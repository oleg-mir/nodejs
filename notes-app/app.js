const getNotes=require('./notes.js')
const chalk=require('chalk')
const log = console.log

const msg = getNotes()

log(msg)
log(chalk.bgBlue.green.underline.bold('success!'))