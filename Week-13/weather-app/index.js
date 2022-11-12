const express = require('express');
const router = require('./src/routes/routes');
require('dotenv').config();
// Express app initialized, Port and API_KEY imported
const app = express();
const port = process.env.PORT || 1008;

// Home routes
app.get('/', (req, res)=>{
    res.send('Welcome to Weather App');
})

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server listening to port ${port}`);
})