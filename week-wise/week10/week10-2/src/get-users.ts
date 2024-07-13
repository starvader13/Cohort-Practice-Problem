import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({log: ['info', 'query', 'error']});

async function main(){
    const users = await prisma.user.findMany({
        where: {
            email: "test@gmail.com"
        }
    });
    console.log(users);

    const user = await prisma.user.findUnique({
        where: {
            id: 1,
        },
        include: {
            posts: true
        }
    })

    console.log(user);
}

main().then(async ()=>{
    console.log("Done with query")
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})
