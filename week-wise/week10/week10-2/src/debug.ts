import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query"
        },
    ],
});

async function main(){
    const users = await prisma.user.findMany({
        take: 2,
        skip: 0
    });
    console.log(users);
}

main().then(async ()=>{
    console.log("Done with query")
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})

prisma.$on("query", async(e)=>{
    console.log(`${e.query} ${e.params}`);
})
