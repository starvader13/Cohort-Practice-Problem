"use strict";
function childFunction() {
    console.log("Hello World");
}
function parentFunction(childFunction) {
    setTimeout(childFunction, 1000);
}
parentFunction(childFunction);
