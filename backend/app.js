const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const productRoutes = require('./api/routes/products');
const userRoutes = require('./api/routes/user');
const profileRoutes = require('./api/routes/profile');
const courseRoutes = require('./api/routes/course');
const enrollRoutes = require('./api/routes/enroll');


const lectureRoutes = require('./api/routes/lecture');

const permissionRoutes = require('./api/routes/permission');
const mailRoutes = require('./api/routes/mail');
var passport = require("passport");


require('./api/auth/auth');

mongoose.connect('mongodb+srv://rishabh53:' +
process.env.MONGO_PASSWORD+ 
'@cluster0-dvu2r.mongodb.net/energytracker?retryWrites=true',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
mongoose.set('useCreateIndex', true)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//use cors to allow cross origin resource sharing
app.use(cors())


app.use(passport.initialize());



app.post("/secret", passport.authenticate('jwt', { session : false }), function(req, res){
   
    console.log("User",req.body.user);
    
    res.json({'message': "Success"});
  });

app.use('/product', productRoutes);
app.use('/user', userRoutes);

app.use('/profile',  profileRoutes);
app.use('/course',  courseRoutes);
app.use('/enroll',  enrollRoutes);
app.use('/lecture',  lectureRoutes);
app.use('/permission',  permissionRoutes);
app.use('/mail',  mailRoutes);


app.use((req, res, next) => {
    const error = new Error('Api not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;