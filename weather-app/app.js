const request = require('request')

const url = 'https://api.darksky.net/forecast/d19bd74d2b00420aa7809831e4252206/37.8267,-122.4233?units=si&lang=es'

request({url: url, json: true}, (error, response)=>{
    console.log(response.body.daily.data[0].summary +' It is currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability +'% chance of rain.')
})