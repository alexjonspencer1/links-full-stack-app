require('dotenv').config();

const pg = require('pg');

const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE golfcourse (
                name SERIAL PRIMARY KEY NOT NULL,
                location VARCHAR(256) NOT NULL,
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