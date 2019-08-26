const square = function(x){
    return x*x
}

const squareArrow = (x) =>{
    return x*x
}

const squareArrow2 = (x) => x*x

console.log(squareArrow(5))
console.log(squareArrow2(6))

const event = {
    name:'Birthday Party',
    guestList:['Gust1','Guest2'],
    printGuestList(){
        console.log('Guest List For: '+ this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + 'is attending ' + this.name)
        })
    }
}

event.printGuestList()