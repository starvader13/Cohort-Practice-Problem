import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({log: ['info', 'query', 'error']});

async function main(){
    await prisma.post.create({
        data: {
            title: "Title",
            content: "Description",
            published: true,
            // authorID: 1  // We can also do this
            author: {
                connect:{
                    id: 1
                }
            }
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
