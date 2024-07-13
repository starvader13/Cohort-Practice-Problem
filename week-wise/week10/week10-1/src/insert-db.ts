import connectClient from "./utils";

type todo = [string, string, number, boolean]

const insertDb = async (): Promise<void> =>{
    const client = await connectClient();

    const userQuery: string = "insert into users(email, password) values ($1, $2) returning id;";
    const userValues: string[] = ["test3@gmail.com", "test1234"];

    const response = await client.query(userQuery, userValues);

    const todoQuery: string = "insert into todos(title, description, user_id, done) values ($1, $2, $3, $4);";
    const todoValues: todo = ["Buy groceries", "Milk, Bread, Eggs", response.rows[0].id, false];
    await client.query(todoQuery, todoValues);

    await client.end();

    console.log("Data added successfully");
}

async function main(){
    await insertDb();
}

main();
