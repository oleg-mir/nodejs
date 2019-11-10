const path = require('path')
const express = require('express')
const hbs = require('hbs')

//express has 1 function that gets you the app
const app = express()
const publicDirectory = path.join(__dirname, '../public')

//setting handlebars for dynamic templates
app.set('view engine', 'hbs')
app.use(express.static(publicDirectory))

//setting a path for "views"
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

app.get('',(req, res)=>{
    res.render('index', {
        title: 'Weather new',
        name: 'Oleg Mir'
    })
})

app.get('/about',(req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Oleg Mir'
    })
})

app.get('/help',(req, res)=>{
    res.render('help', {
        title: 'Help',
        name: 'Oleg Mir',
        helpmessage: 'This is a help message'
    })
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