const express = require('express')
const app = express()
const port = process.env.Port || 5000;
const cors = require('cors')
app.use(cors())
const courseCategory =  require('./data/course-category.json')

app.get('/', (req, res)=>{
    res.send('APi is Running')
})

app.get('/category', (req, res) =>{
    res.send(courseCategory)
})


app.listen(port, ()=>{
    console.log('courser server running')
})