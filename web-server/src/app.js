const path = require('path')
const express = require('express')

//express has 1 function that gets you the app
const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

app.get('/weather',(req, res)=>{
    res.send({
        forecast:'la lala ',
        location: 'israel'
    })
})

app.listen(3000,()=>{
    console.log('Server has started on port 3000')
})