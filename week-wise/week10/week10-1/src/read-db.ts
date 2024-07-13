import connectClient from "./utils";

const readDb = async (): Promise<void> =>{
    const client = await connectClient();

    const userQuery: string = "Select * from users;";
    const response = await client.query(userQuery);

    response.rows.map(row => {
        console.log(`ID: ${row.id}, Email: ${row.email}`);
    })

    const userQueryWithEmail: string = "Select * from users where email=$1;";
    const userValuesWithEmail: string[] = ["test3@gmail.com"];
    const emailResponse = await client.query(userQueryWithEmail, userValuesWithEmail);

    emailResponse.rows.map(row => {
        console.log(`ID: ${row.id}, Email: ${row.email}`);
    })

    await client.end();

    console.log("Data fetched successfully");
}

async function main(){
    await readDb();
}

main();
