const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex:true
})

const User = mongoose.model('User',{
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const Task = mongoose.model('Task',{
    description:{
        type: String
    },
    completed:{
        type: Boolean
    }
})

const taskA = new Task({
    description: "Task A",
    completed: false
})

taskA.save().then(()=>{
    console.log(taskA)
}).catch((error)=>{
    console.log('Error: '+error)
})