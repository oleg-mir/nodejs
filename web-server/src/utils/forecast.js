const request = require('request')

const forecast=(latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/d19bd74d2b00420aa7809831e4252206/'+latitude+','+longitude+'?units=si&lang=en'

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service.', undefined)
        }else if(body.error){
            callback(body.error, undefined)
        }else{
            const summary = body.daily.data[0].summary
            const temperatureHigh = body.daily.data[0].temperatureHigh
            const temperatureLow = body.daily.data[0].temperatureLow

            const {temperature, precipProbability: precipation} = body.currently

            callback(undefined, summary +' It is currently '+temperature+' degrees out. There is a '+precipation +'% chance of rain. Temerature High is '+temperatureHigh+'. '+'Temperature Low is '+temperatureLow)    
        }   
    })
}

module.exports = forecast