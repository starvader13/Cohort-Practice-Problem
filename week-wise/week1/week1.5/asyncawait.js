function asyncFunction(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hi there");
        }, 3000)
    }) 
}

async function main(){
    let value = await asyncFunction();
    console.log(value)
    console.log("hii there1")
}

main()
console.log("ashutosh")