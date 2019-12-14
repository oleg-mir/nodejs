//CRUD - create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error){
        return console.log('unable to connect to database')
    }

    console.log('Connection Created!')

    const db = client.db(databaseName)

    db.collection('tasks').insertMany(
        [
            {
                description: 'task a',
                completed:true
            },
            {
                description: 'task b',
                completed: true
            },
            {
                description: 'task c',
                completed: false
            }
        ],(error, result)=>{
            if(error){
                return console.log('Unable to insert tasks!')
            }

            console.log(result.ops)
        }
    )
})