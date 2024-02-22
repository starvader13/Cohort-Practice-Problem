const users = '{"name": "harikirat", "age": 21, "gender": "male"}'

// JSON.parse
// JSON.stringfy

const user = JSON.parse(users);
console.log(user.gender);

const newUser = {
    name: "Ashutosh",
    gender: "male"
};

const finalString = JSON.stringify(newUser);
console.log(finalString)