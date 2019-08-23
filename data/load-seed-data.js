require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const golfcourse = require('./links');

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then (() => {
        return Promise.all(
            golfcourse.map(golfCourse => {
                return client.query(`
                INSERT INTO golfcourse (name, location, region, par, yards, architect, year, url, hosted_a_major)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);

                `,
                [golfCourse.name, golfCourse.location, golfCourse.region, golfCourse.par, golfCourse.yards, golfCourse.architect, golfCourse.year, golfCourse.url, golfCourse.hasHostedMajor]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });