const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');
const courseRouter = require('./routes/courses');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect('mongodb+srv://dbuser:avokado@lyubovk.egwftuw.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/courses', courseRouter);
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.listen(process.env.PORT || 3000);