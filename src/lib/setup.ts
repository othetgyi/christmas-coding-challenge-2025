import {Client} from 'pg';

process.loadEnvFile('.env');

console.log("ADMIN_DATABASE_URL:", process.env.ADMIN_DATABASE_URL);

const client = new Client({
    connectionString: process.env.ADMIN_DATABASE_URL || `postgresql://postgres@localhost:5432/postgres`
});

await client.connect();

try {
    await client.query(`CREATE ROLE wordbank_user WITH LOGIN PASSWORD '${process.env.POSTGRES_PASSWORD}';`);
    console.log("Role created");
} catch (err: any) {
    if (err.code === '42710') {
        console.log("Role already exists")
    }
}

try {
    await client.query(`CREATE DATABASE wordbank OWNER wordbank_user;`);
    console.log("Database created");
} catch (err: any) {
    if (err.code === '42P04') {
        console.log("Database already exists")
    } else {
        throw err;
    }
}

await client.end();