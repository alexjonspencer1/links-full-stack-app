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
app.use(express.json());

//ROUTES HERE
app.get('/api/golfcourses', (req, res) => {
    client.query(`
        SELECT
            c.name,
            c.location,
            c.region_id,
            t.region as region,
            c.par,
            c.yards,
            c.architect,
            c.year,
            c.url
        FROM golfcourse c
        JOIN regions t
        ON c.region_id = t.id
        ORDER BY c.year
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/golfcourses/:id', (req, res) => {
    const id = req.params.id;

    client.query(`
        SELECT 
            c.*,
            t.region as region
        FROM golfcourse c
        JOIN regions t
        ON c.region_id = t.id
        WHERE c.id = $1
    `,
    [id]
    )
        .then(result => {
            const golfcourse = result.rows[0];
            if(!golfcourse) {
                res.status(404).json({
                    error: `Golf course id ${id} does not exist`
                });
            }
            else {
                res.json(result.rows[0]);
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.post('/api/golfcourses', (req, res) => {
    const golfcourse = req.body;
    client.query(`
        INSERT INTO golfcourse (name, location, region_id, par, yards, architect, year, url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
    `,
    [golfcourse.name, golfcourse.location, golfcourse.regionId, golfcourse.par, golfcourse.yards, golfcourse.architect, golfcourse.year, golfcourse.url]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/regions', (req, res) => {
    client.query(`
        SELECT
            id,
            region
        FROM regions
        ORDER BY region;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});


//Start the server
app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
});