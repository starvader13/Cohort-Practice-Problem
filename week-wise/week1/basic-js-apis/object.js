let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(obj.hasOwnProperty("key"))
console.log(obj.hasOwnProperty("key1"))
let newObj = Object.assign({}, obj, {newProperty: "I am new value"})
console.log(newObj)