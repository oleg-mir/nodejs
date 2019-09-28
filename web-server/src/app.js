const express = require('express')

//express has 1 function that gets you the app
const app = express()

//app.com
app.get('',(req, res)=>{
    res.send('Hello express!')
})

//app.com/help
app.get('/help',(req, res)=>{
    res.send('Help Page')
})

//app.com/about
app.get('/about',(req, res)=>{
    res.send('About Page')
})

app.get('/weather',(req, res)=>{
    res.send('Weather Page')
})

app.listen(3000,()=>{
    console.log('Server has started on port 3000')
})