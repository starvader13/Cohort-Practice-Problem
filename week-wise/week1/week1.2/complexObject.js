// let obj = {
//     firstName: "Ashutosh",
//     age: 18,
//     gender: "male"
// }

const allUsers = [{
    name: "Ashutosh",
    gender: "Male",
    age: 22
},{
    name: "Deep",
    gender: "Male",
    age: 21,
    metadata: {
        address: "abcabc"
    }
},{
    name: "Mansi",
    gender: "Female",
    age: 22
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i].gender=="Female"){
        console.log(allUsers[i].name);
    }
}