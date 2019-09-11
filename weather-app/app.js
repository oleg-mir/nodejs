const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/d19bd74d2b00420aa7809831e4252206/37.8267,-122.4233?units=si&lang=en'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib2xlZ21pciIsImEiOiJjazBjb2c0anAxM3E5M2lwaTQxamh1aTdpIn0.YcNFKj-y2R6enrnt9EI9Rw&limit=1'

// request({url: url, json: true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log(response.body.error)
//     }else{
//         console.log(response.body.daily.data[0].summary +' It is currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability +'% chance of rain.')    
//     }   
// })

// request({url: geocodeURL, json: true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service.')
//     }else if(response.body.features.length === 0){
//         console.log('Error occured while fetching data.')
//     }else{
//         const longitude = response.body.features[0].center[1]
//         const latitude = response.body.features[0].center[0]
    
//         console.log(latitude,longitude)
//     }
// })



geocode('Tel Aviv',(error, data)=>{
    console.log('Error: ', error)
    console.log('Data: ', data)
})