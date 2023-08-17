// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello ${this.name}')
//     }
// }

// User.prototype.exit = function(){
//     console.log('User $(this.name) exit')
// }

// const samar = new User('Samar', 8);
// const sammi = new User('Sammi', 9);
// const yusuf = new User('Yusuf', 10);

// // const samar1 = {
// //     name:'Samar',
// //     id: 8,
// //     human:true
// // }
// // console.log(samar1);

// samar.exit();
// yusuf.exit();
// yusuf.hello();

// console.log(samar);
// console.log(sammi);


// // Kontekst vizov this this
// function hi(){
//     console.log(this);
// }
// hi()

// // // function showThis(a,b){
// // //     console.log(this);
// // //     function sum(){
// // //         console.log(this)
// // //         return a + b
// // //     }
// // //     console.log(sum());
// // // }
// // // showThis(1,4)

// const obj = { //konteks u metodov obyekt
//     a: 20,
//     b: 15,
//     c: 15,
//     sum: function(){
//         console.log(`${this.a} + ${this.b} + ${this.c}`)
//     }
// }
// obj.sum();


// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.age = 19;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`)
//     }
//     this.yourAge = function(){
//         console.log(`your age! I think ${this.age}`)
//     }
// }

// const samar = new User('Samar', 8)
// const yusuf = new User('Yusuf', 9)
// console.log(samar);
// console.log(yusuf);
// samar.hello()
// samar.yourAge()// this construktur va class bu yangi Example obyekti

// function sayName(surname){
//     console.log(this)
//     console.log(this.name + surname)
// }

// const user = {
//     name:'Samar'
// }
// sayName.call(user,' Smith')
// sayName()

// const user = {
//     name: 'User'
// }
// sayName.call(user,'Smith')
//ruchnoy qo'lda o'lash hammasini yozib 34:29 minutda to'htadi


// function count(num){
//     return this + num;
// }

// const double = count.bind(2)
// console.log(double(13))
// console.log(double(15))
// console.log(double(17))

// const btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'crimson'
// })

// const obj = {
//     num:5,
//     sayNumber:function(){
//         const say = () =>{
//             console.log(this.num)
//         }
//         say()
//     }
// }
// obj.sayNumber()

class Square {
     constructor(width,height) {
      this.width = width;
      this.height = height;  
     }
     //mettod yaratilishi kerrak
     calcArea(){
        return this.width * this.height;
     }
}

class ColorSquare extends Square{
    constructor(width,height,text,bg){
        super(width,height)
        this.text = text;
        this.bg = bg;
    }
    showMyProps(){
        console.log(`The text ${this.text} and ${this.bg}`)
    }
}

const firstSquare = new Square(100,100)
const secondSquare = new Square(50,2)
console.log(firstSquare.calcArea())
console.log(secondSquare.calcArea())

const div = new ColorSquare(10,20,'Hello world', 'crimson')
div.showMyProps()
console.log(div.calcArea());
div.calcArea()
