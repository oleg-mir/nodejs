const watherForm = document.querySelector('form')
const searchElement = document.querySelector('input')

watherForm.addEventListener('submit', (e)=>{
    //prevent default behaviour and refresh page
    e.preventDefault()
    const location = searchElement.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data.location)
                console.log(data.forecastData)
            }      
        })
    })
})