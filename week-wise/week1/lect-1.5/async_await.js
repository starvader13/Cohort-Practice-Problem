function customAsyncFunction(){
    return new Promise((resolve)=>{
        resolve("hi there");
    });
}

function onDone(data){
    console.log(data)
}

async function main(){
    let value = await customAsyncFunction()
    onDone(value)
}

main()
console.log("hello")