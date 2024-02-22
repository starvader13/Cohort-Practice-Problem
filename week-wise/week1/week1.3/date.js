let date = new Date();

console.log(date.getMonth() + 1);
console.log(date.getYear()) // - 1900
console.log(date.getFullYear())

date.setFullYear(2022);
console.log(date);

// epoch time => time in milliseconds since 1970
console.log(date.getTime());
