require('dotenv').config();

const pg = require('pg');

const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE regions (
                id SERIAL PRIMARY KEY NOT NULL,
                region VARCHAR(256) NOT NULL
            );

            CREATE TABLE golfcourse (
                name VARCHAR(256) NOT NULL,
                location VARCHAR(256) NOT NULL,
                region_id VARCHAR(256) NOT NULL REFERENCES regions(id),
                par INTEGER NOT NULL,
                yards INTEGER NOT NULL,
                architect VARCHAR(256) NOT NULL,
                year INTEGER NOT NULL,
                url VARCHAR(256) NOT NULL,
                hosted_a_major BOOLEAN NOT NULL
            );
        `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });