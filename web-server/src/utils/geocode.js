const request = require('request')

const geoCode=(adress, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1Ijoib2xlZ21pciIsImEiOiJjazBjb2c0anAxM3E5M2lwaTQxamh1aTdpIn0.YcNFKj-y2R6enrnt9EI9Rw&limit=1';

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service.', undefined)
        }else if(body.features.length === 0){
            callback('Error occured while fetching data.', undefined)
        }else{
             const longitude = body.features[0].center[1]
             const latitude = body.features[0].center[0]
             const location = body.features[0].place_name

             callback(undefined, {latitude, longitude, location})
        }
    })
}

module.exports = geoCode