require('dotenv').config();

//Application dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

//Database client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

//Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

//ROUTES HERE


//Start the server
app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
});