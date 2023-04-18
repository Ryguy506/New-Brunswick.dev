const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3003;
const cookieSession = require('cookie-session');
const passportSetup = require('./passport.js');
const passport = require('passport');
const cors = require('cors');
const authRoute = require('./routes/auth');
const URL = 'mongodb+srv://valeriikryshtal:Password123@developersnb.xzdm7zp.mongodb.net/developersNB?retryWrites=true&w=majority';
const path = require('path');
const routes = require("./routes")
const app = express()

let db;

mongoose
     .connect(URL)
     .then(()=> console.log('Connected to MongoDB'))
     .catch((err)=> console.log(`DB connection error: ${err}`))
     app.listen(PORT, (err)=>{
          err ? console.log(err) : console.log("App is listening on: http://localhost:" + PORT)
     });

// If this is production allow static files to be served from the build folder
if (process.env.NODE_ENV === 'production') {
     app.use(express.static(path.join(__dirname, '../client')));
}
//Load the stage for our react app, since it is a single page
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.use(cookieSession(
     {
     name: 'session',
     keys: ['nbdev'],
     maxAge: 24 * 60 * 60 * 1000 // 24 hours
     }
));


app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
     origin: 'http://localhost:3000',
     methods: 'GET,PUT,POST,DELETE',
     credentials: true
     }));
     
app.use('/auth', authRoute);
app.use("/" ,routes)