const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

// keys, values
console.log(Object.keys(obj))
console.log(Object.values(obj))

// entries
console.log(Object.entries(obj))

// hasOwnProperty
console.log(obj.hasOwnProperty("key1"))

// assign
let newObj = Object.assign({}, obj, { key4: "value4"});
console.log(newObj);