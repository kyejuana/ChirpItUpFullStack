import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('Cannot find a .env file!');
}

export default {
    mysql: {
        host: process.env.DB_USER,
        user: process.env.DB_USER,
        password: process.env.DB_USER,
        database: process.env.DB_USER,
    },
    app: {
        port: parseInt(process.env.PORT, 10),
        prefix: process.env.API_PREFIX
    }
}