const arr = [1,2,3]

// push, pop, shift, unshift
arr.push(2);
arr.pop();
arr.unshift(0);
arr.shift();

// conact
const newArr = [4, 5, 6];
const finalArr = arr.concat(newArr)

// forEach 
finalArr.forEach((str)=>{
    console.log(str)
})