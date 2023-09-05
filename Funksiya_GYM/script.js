"use strict";

// function sayHelloWorld(){
//     console.log("MY first fuctions in script file");
// }
// sayHelloWorld();

// function calc(a,b){
//     return a+b;
// }

// console.log(calc(4,5));
// console.log(a);
// var a = 1;

// const text = function(){
//     console.log("HI IS MURODJAN");
// }
// text();

// const qwer = (a,b) => a+b;
// console.log(qwer(123,123));





function first(){
    //code
    setTimeout(() =>{
        console.log(1);
    },1000)
}
function second(){
    //code
    console.log(2);
}

first();// serverdan kelgan ma'lumot
second();

function edu(subject, calback){
    console.log(`I was teach ${subject}`);
    calback();
}

function done(){
    console.log("That's great");
}

edu("JavaScript", done)