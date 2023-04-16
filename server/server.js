const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3001;
const URL = 'mongodb+srv://valeriikryshtal:Password123@developersnb.xzdm7zp.mongodb.net/developersNB?retryWrites=true&w=majority';
const path = require('path');


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
     app.use(express.static(path.join(__dirname, '../client/build')));
}
//Load the stage for our react app, since it is a single page
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

