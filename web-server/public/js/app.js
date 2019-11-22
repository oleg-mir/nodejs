const watherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

watherForm.addEventListener('submit', (e)=>{
    //prevent default behaviour and refresh page
    e.preventDefault()
    const location = searchElement.value

    messageOne.textContent = 'Loading Data...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData             
            }      
        })
    })
})