// app.get('/',(req,res)=>{
//     console.log('home')
//     res.send("hello world")
// })
// app.get('/about',customMiddleware,(req,res)=>{
//     console.log('about')
//     res.send("About")
// })

const express = require('express')
const app = express()
const mongoose = require("mongoose") // HdwIkN330c8ntbr9
const PORT = 5000
const {MONGOURI} = require('./keys')

// const customMiddleware = ( req,res,next)=>{
//     console.log("Middleware executed")
//     next()
// }

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected')
})
mongoose.connection.on('error',()=>{
    console.log('Connection error',err)
})

app.listen(PORT,()=>{
    console.log("server active on",PORT)
})