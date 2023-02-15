const express = require('express');
const router = express.Router();

//All Courses Route
router.get('/', (req, res) => {
    res.render('courses/index');
});

//New Course Route
router.get('/new', (req, res) => {
    res.render('courses/new');
});

//Create Course Route
router.post('/', (req, res) => {
    res.send('Create');
});


module.exports = router;