const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const category = require('./data/category.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('My server is Ready For Runnging')
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const singleCategory = category.find(ct => ct.id === id);
    console.log('id', id, singleCategory);
    res.send(singleCategory)
})

app.get('/courses', (req, res) => {
    res.send(courses);

})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseItem = courses.find(singleCourse => singleCourse.id === id);
    res.send(courseItem);
})

app.get('/premium/:id', (req, res) => {
    const id = req.params.id;
    const premiumItem = courses.filter(singlePri => singlePri.category === id);
    res.send(premiumItem);
})
app.listen(port, (req, res) => {
    console.log('Server is Running on port in', port);
})