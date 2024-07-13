
function childFunction(): void{
    console.log("Hello World")
}

function parentFunction(childFunction: ()=> void ): void{
    setTimeout(childFunction, 1000)
}

parentFunction(childFunction);
