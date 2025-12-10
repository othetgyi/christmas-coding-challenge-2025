// @ts-ignore
import pool from './db.ts';

const initialiseDatabase = async () => {
    try {
        await pool.query(`
                    CREATE TABLE IF NOT EXISTS wordbank
                    (
                        id         SERIAL PRIMARY KEY,
                        word       VARCHAR(255) NOT NULL UNIQUE,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
            `
        );
        console.log("Database successfully initialised");
    } catch (error) {
        console.error('Error initialising database:', error);
        throw error;
    }
}

initialiseDatabase();
export default initialiseDatabase;