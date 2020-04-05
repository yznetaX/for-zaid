const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware Setup

app.use(bodyParser.json());
app.use(cors());

// Setup Routes

const movies = require('./routes/api/movies');

app.use('/api/movies', movies);


//PORT 
const port = process.env.PORT || 8081;

app.listen(port , () => {
    console.log(`Server Listen To Port ${port}`);
})