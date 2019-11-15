console.log('Cliens side javascript loaded')

fetch('/weather?address=boston').then((response) => {
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecastData)
        }      
    })
})