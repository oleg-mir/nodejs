const express = require('express')

//express has 1 function that gets you the app
const app = express()

//app.com
app.get('',(req, res)=>{
    res.send('<h1>Hello express!</h1>')
})

//app.com/help
app.get('/help',(req, res)=>{
    res.send({
        name: 'Oleg',
        birthdate: '1988'
    })
})

//app.com/about
app.get('/about',(req, res)=>{
    res.send('<h1>About</h1>')
})

app.get('/weather',(req, res)=>{
    res.send({
        forecast:'la lala ',
        location: 'israel'
    })
})

app.listen(3000,()=>{
    console.log('Server has started on port 3000')
})