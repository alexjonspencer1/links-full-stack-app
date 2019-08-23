require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const golfcourse = require('./links');
const regions = require('./regions');

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return Promise.all(
            regions.map(region => {
                return client.query(`
                    INSERT INTO regions (region)
                    VALUES ($1)
                    RETURNING *;
                `,
                [region])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then (regions => {
        return Promise.all(
            golfcourse.map(golfCourse => {
                const region = regions.find(region => {
                    return region.region === golfCourse.region;
                });
                const regionId = region.id;

                return client.query(`
                INSERT INTO golfcourse (name, location, region_id, par, yards, architect, year, url, hosted_a_major)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);

                `,
                [golfCourse.name, golfCourse.location, regionId, golfCourse.par, golfCourse.yards, golfCourse.architect, golfCourse.year, golfCourse.url, golfCourse.hasHostedMajor]);
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