const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex:true
})

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password'))
            {
                throw new Error('password can not contain "password" word')
            }
        }
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error('Email is invalid!') 
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const Task = mongoose.model('Task',{
    description:{
        type: String,
        trim: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

// const me = new User({
//     name: "   oleg   ",
//     email: "OLEG@dsf.cpm   ",
//     password:"123pas!sword"
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error: '+error)
// })



const task = new Task({
    description: "Task B",
})

taskA.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log('Error: '+error)
})