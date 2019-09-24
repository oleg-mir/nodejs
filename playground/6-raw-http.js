const https = require('https')

const latitude = 40
const longitude = 75

const url = 'https://api.darksky.net/forecast/d19bd74d2b00420aa7809831e4252206/'+latitude+','+longitude+'?units=si&lang=en'

const request = https.request(url,(response)=>{
    let data = ''
    
    response.on('data', (chunk)=>{
        data = data + chunk.toString();
    })

    response.on('end',()=>{
        console.log(data)
        const body = JSON.parse(data)

        console.log(body)
    })
})

request.on('error',(error)=>{
    console.log('error: ', error)
})

request.end()