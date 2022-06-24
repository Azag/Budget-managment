const express = require('express');
const bodyParser = require('body-parser');

const router = require('./Routes/allroutes.js');


const app = express();


app.use(bodyParser.json());
app.use(router);


const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
