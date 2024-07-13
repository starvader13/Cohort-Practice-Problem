import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data: {
            email: "test@gmail.com",
            name: "test"
        }
    })
}

main().then(async ()=>{
    console.log("Done with query")
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})
