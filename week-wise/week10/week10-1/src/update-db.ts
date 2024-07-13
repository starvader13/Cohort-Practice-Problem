import connectClient from "./utils";

const updateDb = async(todo_id: number): Promise<void>=>{
    const client = await connectClient();

    const query: string = 'Update todos set done = $1 where id = $2;';
    const values: (number | boolean)[] = [true, todo_id];

    const response = await client.query(query,values);

    console.log("Updates successfully")
}

updateDb(1);
