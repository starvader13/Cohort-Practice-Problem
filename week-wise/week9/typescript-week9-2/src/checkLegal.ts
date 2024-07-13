interface User {
    firstname: string;
    lastname: string;
    age: number;
    email?: string;  //optional string
}


const isLegal = (user: User)=>{
    return user.age > 18;
}

isLegal({
    firstname: "Ashutosh",
    lastname: "Gupta",
    age: 20
})
