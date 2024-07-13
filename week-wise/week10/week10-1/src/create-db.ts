import connectClient from "./utils";
import {Client} from "pg";

const createDb: ()=>Promise<void> = async ()=>{
    const client: Client= await connectClient();

    const userQuery:string =`
        create table users(
            id serial primary key,
            email varchar(255) not null unique,
            password varchar(255) not null   
        );
    `;

    const todoQuery:string = `
        create table todos (
            id serial primary key,
            title text not null,
            description text,
            user_id integer references users(id),
            done boolean default false
        );
    `;

    await client.query(userQuery);
    await client.query(todoQuery);

    await client.end();

    console.log("Table created successfully");

}

async function main(): Promise<void>{
    await createDb();
}

main();
