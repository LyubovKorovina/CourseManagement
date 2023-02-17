const express = require('express');
const router = express.Router();
const Course = require('../models/course')

//All Courses Route
router.get('/', (req, res) => {
    res.render('courses/index');
});

//New Course Route
router.get('/new', (req, res) => {
    res.render('courses/new', {course: new Course});
});

//Create Course Route
router.post('/', (req, res) => {
    const course = new Course({
        name: req.body.name,
        description: req.body.description
    });
    course.save((err, newCourse) => {
        if (err) {
            res.render('courses/new', {
                course: course,
                errorMessage: 'Error creating course.'
            });
        } else {
            //res.redirect(`courses/${newCourse.id}`)
            res.redirect('courses')
        }
    });
});

//Read Single Course
router.get('/:id', (req, res) => {
    res.send('Show Course' + req.params.id)
});

//Update Single Course
router.put('/:id', (req, res) => {
    res.send('Update Course' + req.params.id)
});

//Delete Single Course
router.delete('/:id', (req, res) => {
    res.send('Delete Course' + req.params.id)
});


module.exports = router;