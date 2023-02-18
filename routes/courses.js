const express = require('express');
const router = express.Router();
const Course = require('../models/course')

//All Courses Route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const courses = await Course.find(searchOptions)
        res.render('courses/index', { 
            courses: courses, searchOptions: req.query });
    } catch {
        res.redirect('/')
    }
});

//New Course Route
// router.get('/new', (req, res) => {
//     res.render('courses/new', { course: new Course() });
// });

router.get('/new', async (req, res) => {
    try {
        const course = await new Course()
        res.render('courses/new', {
            course: course
        })
    } catch {
        res.redirect('/courses')
    }

});

//Create Course Route
router.post('/', async (req, res) => {
    const course = new Course({
        name: req.body.name,
        description: req.body.description
    })
    try {
        const newCourse = await course.save()
        res.redirect(`/courses/${newCourse.id}`)
    } catch {
        res.render('courses/new', {
            course: course,
            errorMessage: 'Error creating course.'
        });
    }

});

//Read Single Course
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).limit(5).exec()
    } catch {
        res.redirect('/')
    }
});

//Update Single Course
router.put('/:id', async (req, res) => {
    let course
    try {
        course = await Course.findById(req.params.id)
        course.name = req.body.name
        await course.save()
        res.redirect(`/courses/${newCourse.id}`)
    } catch {
        if (course == null) {
            res.redirect('/')
        } else {
            res.render('courses/edit', {
            course: course,
            errorMessage: 'Error updating course.'
        });
    }
    }
});

//Delete Single Course
router.delete('/:id', async (req, res) => {
    let course
    try {
        course = await Course.findById(req.params.id)
        await course.remove()
        res.redirect(`/courses`)
    } catch {
        if (course == null) {
            res.redirect('/')
        } else {
            res.redirect(`/courses/${course.id}`)
    }
    }
});


module.exports = router;