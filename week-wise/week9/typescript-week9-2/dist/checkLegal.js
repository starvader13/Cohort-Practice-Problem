"use strict";
const isLegal = (user) => {
    return user.age > 18;
};
isLegal({
    firstname: "Ashutosh",
    lastname: "Gupta",
    age: 20
});
