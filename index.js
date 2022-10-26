const express = require('express')
const app = express()
const port = process.env.Port || 5000;
const cors = require('cors')
app.use(cors())
const courseCategory =  require('./data/course-category.json')

const courses = require('./data/courses.json')

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const course_category = courses.filter(cat=> cat.category_id === id)
    res.send(course_category)
})
app.get('/course-details/:id', (req, res)=>{
    const id = req.params.id;
    const details = courses.find( d=> d._id === id)
    res.send(details)
})

app.get('/', (req, res)=>{
    res.send('APi is Running')
})

app.get('/category', (req, res) =>{
    res.send(courseCategory)
})


app.listen(port, ()=>{
    console.log('courser server running')
})