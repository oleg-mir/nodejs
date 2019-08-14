const fs = require('fs')

fs.writeFileSync('notes.txt','This file was created by nodejs');
fs.appendFileSync('notes.txt','\nappend test')
fs.appendFileSync('notes.txt','\nappend test2')