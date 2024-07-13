"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:ashutoshpassword@localhost:5432/postgres"
});
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
// This can create SQL injection
const insertIntoUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    try {
        const result = yield client.query(`
            Insert Into users(username, email, password) Values ('test', 'test@gmail.com', 'test1234');
        `);
        console.log("Insertion successful ", result);
    }
    catch (e) {
        console.error('Error during insertion ', e);
    }
    finally {
        yield client.end();
    }
});
// Better solution to solve the issue of sql injection
const insertIntoUserSolveSQLInjection = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    try {
        const insertQuery = "Insert Into users(username, email, password) Values ($1, $2, $3);";
        const values = [username, email, password];
        const result = yield client.query(insertQuery, values);
        console.log("Insertion successful ", result);
    }
    catch (e) {
        console.error('Error during insertion ', e);
    }
    finally {
        yield client.end();
    }
});
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = 'Select * from users Where email=$1;';
        const value = [email];
        const result = yield client.query(query, value);
        if (result.rows.length > 0) {
            console.log("User Found ", result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log("No user Found");
            return null;
        }
    }
    catch (e) {
        return null;
    }
});
