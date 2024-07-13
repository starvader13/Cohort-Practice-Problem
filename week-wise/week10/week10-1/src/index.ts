
import {Client} from "pg";
import * as async_hooks from "node:async_hooks";

const client = new Client({
    connectionString: "postgresql://postgres:ashutoshpassword@localhost:5432/postgres"
})

async function createUserTable(){
    await client.connect();

    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result)
}
// This can create SQL injection
const insertIntoUser =async  ()=>{
    await client.connect();
    try {
        const result = await client.query(`
            Insert Into users(username, email, password) Values ('test', 'test@gmail.com', 'test1234');
        `)
        console.log("Insertion successful ", result);
    }catch(e){
        console.error('Error during insertion ', e);
    }finally{
        await client.end();
    }

}

// Better solution to solve the issue of sql injection
const insertIntoUserSolveSQLInjection =async  (username: string, email: string, password: string):Promise<void>=>{
    await client.connect();
    try {
        const insertQuery: string = "Insert Into users(username, email, password) Values ($1, $2, $3);";
        const values = [username, email, password];
        const result = await client.query(insertQuery, values);
        console.log("Insertion successful ", result);
    }catch(e){
        console.error('Error during insertion ', e);
    }finally{
        await client.end();
    }
}

const getUser = async (email:string)=>{
    try{
        await client.connect();
        const query = 'Select * from users Where email=$1;';
        const value = [email];

        const result = await client.query(query, value);

        if(result.rows.length > 0){
            console.log("User Found ", result.rows[0]);
            return result.rows[0];
        }else {
            console.log("No user Found");
            return null
        }
    }catch(e){
        return null;
    }
}
