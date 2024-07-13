import {Client} from "pg";

const client = new Client({
    connectionString: "postgres://postgres:ashutoshpassword@localhost:5432/postgres"
})

const connectClient = async ():Promise<Client>=>{
    await client.connect();
    return client;
}

export default connectClient;
