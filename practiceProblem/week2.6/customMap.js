function customMap(arr, transform){
    let modifyArr = []
    for(let i=0;i<arr.length;i++){
        modifyArr.push(transform(arr[i]))
    }  
    return modifyArr;
}

const input = [1, 2, 3, 4, 5];
let output = customMap(input, (val)=>{
    return val*2;
});
console.table(output)