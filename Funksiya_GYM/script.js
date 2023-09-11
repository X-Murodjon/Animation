"use strict";

class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        alert(`${this.name} shu tezlikda yuguryapti ${this.speed}.`);
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} yugurmayapti.`);
    }
}
class Rabbit extends Animal{
    hide(){
        alert(`${this.name} berkinyapti`);
    }
    stop(){
        // super.stop();
        // this.hide();
        setTimeout(() => super.stop(), 5000);
    }
}
let rabbit = new Rabbit("Oq quyon");
let animal = new Animal("Mening hayvonim");

rabbit.run(5);
rabbit.hide();

// arr.forEach(function{
    
// });

//arr.pop(); //ohiridan bitta sonni olib tashlaydi.
//arr.push(10); // ohiriga 10 sonini qushadi.
// shift() unshift() hozirda ishlatilmaydi,
//console.log(arr);
// arr[99] = 0;
// console.log(arr);
// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }



//const { setTransitionHooks } = require("vue");

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





// function first(calback){
//     //code
//     setTimeout(() =>{
//         console.log(1);
//         calback();
//     },1000)
// }
// function second(){
//     //code
//     console.log(2);
// }

// first(second);// serverdan kelgan ma'lumot

// function edu(subject, calback){
//     console.log(`I was teach ${subject}`);
//     calback();
// }

// function done(){
//     console.log("That's great");
// }

// edu("JavaScript", done)

// // // const theif = {
// // //     jacket: "black",
// // //     hieght:1.7,
// // //     colors:{
// // //         hair:"grey",
// // //         style:"curley",
// // //     },
// // //     howOut: function (){
// // //         console.log("Fast with help doors");
// // //     },
// // // };
// // // theif.howOut();
// // // const {hair,style} = theif.colors;
// // // // const hair = theif.colors.hair;
// // // // const style = theif.colors.style;

// // // console.log(hair);
// // // console.log(style);
// console.log(theif.hieght);
// delete theif.jacket;

// console.log(theif);

// let count = 0;
// console.log(Object.keys(theif).length);

// for(let key in theif){
// count++;
    // if(typeof theif[key] === "object"){
    //     for(let i in theif[key]){
    //         console.log(`Property ${i} has value ${theif[key][i]}`);
    //         // console.log(`Property ${i} has value ${typeof theif[key][i]}`);
    //     }
    // } else {
    //     console.log(`Property ${key} has value ${theif[key]}`);
//     // }
// }
// console.log(count);