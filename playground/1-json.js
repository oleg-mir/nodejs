const fs = require('fs')
// const book = {
//     title:'book title',
//     author: 'book author'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title)

// fs.writeFileSync('1-json.json',bookJSON)

 const dataBuffer = fs.readFileSync('1-json.json')
 const dataJSON = dataBuffer.toString()
 var data = JSON.parse(dataJSON)
 data.name='Oleg'
 data.age = '31'

 fs.writeFileSync('new.json',JSON.stringify(data))