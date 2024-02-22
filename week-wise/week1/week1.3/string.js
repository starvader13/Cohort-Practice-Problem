// Length
let str = "Hello World";
console.log(str.length);

// indexOf => find the index of a subString
// lastIndexOf => find the last index of a subString
findStr = "World";
console.log(str.indexOf(findStr));

// slice => does not include the last index
console.log(str.slice(0, 5))

// substr => start from a index goes to the length
console.log(str.substr(2,5))

// replace
console.log(str.replace("World", "javascript"))

// split
console.log(str.split('W'))

// trim
console.log("    ashutosh gupta     ".trim())

// toUpperCase, toLowerCase
console.log("Ashutosh Gupta".toLowerCase())
console.log("Ashutosh Gupta".toUpperCase())