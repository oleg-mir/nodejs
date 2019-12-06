const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//express has 1 function that gets you the app
const app = express()
//environement variable provided by Heroku. when doesnt exist, e.g running localy
const port = process.env.PORT || 3000

const publicDirectory = path.join(__dirname, '../public')

//setting handlebars for dynamic templates
app.set('view engine', 'hbs')
app.use(express.static(publicDirectory))

//setting a path for "views"
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

const createdBy = "Oleg Mir"

app.get('',(req, res)=>{
    res.render('index', {
        title: 'Weather new',
        name: createdBy
    })
})

app.get('/about',(req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: createdBy
    })
})

app.get('/help',(req, res)=>{
    res.render('help', {
        title: 'Help',
        name: createdBy,
        helpmessage: 'This is a help message'
    })
})

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'Address must be provided'
        })
    }

    const location = req.query.address

    geocode(location,(error, {latitude, longitude, location} ={})=>{

        if(error){
            return res.send({ error })
        }
        
        forecast(latitude, longitude, (error, forecastData) => {

            if(error){
                return res.send({ error })
            }

            res.send({
                location,
                forecastData
            })
        })
    })
})

app.get('/products',(req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: "404",
        errorMessage: "Help article not found.",
        name: createdBy
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: "404",
        errorMessage: "Page not found.",
        name: createdBy
    })
})

app.listen(port,()=>{
    console.log('Server has started on port ' + port)
})