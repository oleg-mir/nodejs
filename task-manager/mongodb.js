//CRUD - create read update delete

//using destructure feature
const {MongoClient, ObjectID }= require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error){
        return console.log('unable to connect to database')
    }

    console.log('Connection Created!')
    const db = client.db(databaseName)

    db.collection('tasks').findOne({_id: new ObjectID("5df53548bd1fc11424498829")},(error, task)=>{
        if(error)
        {
            return console.log('Unable to fetch task')
        }

        console.log(task)
    })

    db.collection('tasks').find({completed:true}).toArray((error, tasks)=>{
        console.log(tasks)
    })
})