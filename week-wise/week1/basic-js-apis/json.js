const users = '{"name": "Ashutosh", "age": 21, "gender": "male"}'

// JSON.parse
const user = JSON.parse(users)
console.log(user)
console.log(user["gender"])

// JSON.stringfy
const userDetails = {
    name: "Ashutosh",
    age: 21,
    gender: "Male"
}
const finalString = JSON.stringify(userDetails)
console.log(finalString)
