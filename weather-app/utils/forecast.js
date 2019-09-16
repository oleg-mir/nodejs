const request = require('request')

const forecast=(latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/d19bd74d2b00420aa7809831e4252206/'+latitude+','+longitude+'?units=si&lang=en'

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather service.', undefined)
        }else if(response.body.error){
            callback(response.body.error, undefined)
        }else{
            const summary = response.body.daily.data[0].summary
            const temperature = response.body.currently.temperature
            const precipation = response.body.currently.precipProbability

            callback(undefined, response.body.daily.data[0].summary +' It is currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability +'% chance of rain.')    
        }   
    })
}

module.exports = forecast