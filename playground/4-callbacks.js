// setTimeout(()=>{
//     console.log("2 sec ended") 
// }, 2000)

// const names = ['Aaaaaaa','Bbb','Ccccc']
// const shortNames = names.filter((name)=>{
//     return name.length <=4
// })

// const geoCode=(adress,callback)=>{
//     setTimeout(()=>{
//         const data={
//             latitude:0,
//             logitude:0
//         }
    
//         callback(data)
//     },2000)
// }

// geoCode('phily', (data)=>{
//     console.log(data)
// })


const add=(num1, num2, callback)=>{
    setTimeout(()=>{
        callback(num1+num2)       
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

