const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve([1,2,3])
        reject('Things went wrong')
    },2000)
})

//executed only on success = resolve
doWorkPromise.then((result)=>{
    console.log('Success', result)
}).catch((error)=>{
    console.log('Error', error)
})