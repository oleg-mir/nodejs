//shorthand

const name = 'Oleg'
const userAge =30

const user={
    name: name,
    age: userAge,
    location: 'Israel'
}

const userShortHand={
    name,
    age: userAge,
    location: 'Israel'
}

console.log(user)
console.log(userShortHand)

//destructuring
const product ={
    label:'notebook',
    price:3,
    stock:200,
    price: undefined
}

//const label = product.label
//const stock = product.stock

const {label: productLabel, stock} = product

console.log(productLabel)
console.log(stock)


const transaction = (type, {label, stock})=>{
    console.log(type, label, stock)
}

transaction('order', product)