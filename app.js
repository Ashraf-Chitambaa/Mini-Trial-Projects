// let a = 1, b = 1;

// let answer = (a == b)? 'Yea it is true' : 'it is not true';
// setTimeout(() => {
//     console.log(answer)
// }, 5000);

// function sayHello(name) {
//     console.log("Hello " + name + "How are you doing");
//     console.log("It is so good to have you here and feel honoured>>>!!!");
// }

// let message = sayHello("Thandiwe Phiri")

// let counter = 1;
// function timer() {
//     setTimeout( function (){
//         for(i = 1; i < 4; i++) {
//             console.log(i)
//             timer();
//         }
//     }, 3000) 
// }
// timer();


// (function () {
//     console.log("Imediately Invoked Function Expression (IIFE)");
// })();

// let numbers = [4, 8, 23, 56, 71, 2, 44];

// for (i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let numbers = [4, 8, 23, 56, 71, 2, 44];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers [i];
//     console.log(number);
// }

// let number = 1;
// while (number < 7) {
//     console.log(number++);

//     if(number == 4) {
//         continue;
//     }
// }

// function one() {
//     return 'One';
// } 

// console.log(one());

// objects
// let car = {
//     make: 'BMW',
//     model: "7171727ie",
//     year : 2011,
//     getDiscount: function() {
//         console.log("No dicounts available for now!!!");
//     },
//     givePayment: function() {
//         console.log(this.make + ' ' + this.year);
//     }

// }
// console.log(car.model);
// car.givePayment();
// car.getDiscount();

// var anotherCar = {};

// anotherCar.whatever = 'Typos';
// console.log(anotherCar.whatever);

// putting an object inside another object
// var brand = {
//     insideBrand: {value : 'typical'}
// };
// console.log(brand.insideBrand.value);

// putting an array of obects inside an object
/* var mainObject = {
    myProperty: [
        {name: 'ashraf'},
        {surNAme: 'chitambaa'},
        {gfName: 'Thandiwe'},
        {grSurName: 'Phiri'},
        {situation: 'not stable'}
    ]
}

console.log(mainObject.myProperty[2].gfName); */

// function fullName() {
//     console.log(this.firstName + " " + this.secondName);
// }

// let student1 = {
//     firstName: 'Ashraf',
//     secondName: 'Saidi',
//     output: fullName
// }

// let student2 = {
//     firstName: 'Amazon',
//     secondName: 'cook',
//     output: fullName
// }

// student2.output();
// student1.output();

/* let name = 'ashraf';
console.log(`hi ${name}`);
 let returned = function() {
     return 3;
 }
console.log(`Hey you answer for the multiplication of the number ${(returned() == 2) ? 'is true.':'it is false'}` ); */

// let pattern = /Ashraf/;

// let sentence = 'Ashraf is not a good citizen he has to be sent to exile for a while to learn a lesson'; //what a weird sentence 

// // console.log(sentence.replace(pattern, 'ASHY'));
// // console.log(sentence.match(pattern));
// let matchResult = sentence.match(pattern);
// console.log(matchResult.index);     for more infomation abput regular expressions ..{zipcode regex}

// (oloo) objects linking to other objects


// class declarations are the same as that of functions
// class Student {
//     constructor(name, age, year, program) {
//         this.name = name,
//         this.age = age,
//         this.year = year,
//         this.program = program
//     }
//     details() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Year: ${this.year}, Program: ${this.program}`);
//     }
// }

// let firstStudent = new Student('Ashraf', 19, 'one', 'Bachelor of Science');
// firstStudent.details();

// class SecondStudent extends Student {

// }
// let secondStudent = new SecondStudent('John', 22, 'three', 'Bachelor of Science in Chemistry');
// secondStudent.details();

// console.log(firstStudent);      //typescript (need to be checked)
// console.log(secondStudent);
// // class expression
// let student = class {

// }

// let today = new Date();

// let myBirthDay = new Date('July 10, 2001')

// console.log(myBirthDay.getFullYear());
// let names = ['ashraf', 'marriam', 'shahidah', 'shareef', 'A.rahman'];
// let number = [1, 2, 5, 3, 4];

// names.map((name) => {console.log(`Name: ${name}`);})
// console.log(names.concat(number));
// let combined = number.concat(names);
// console.log(combined);
// console.log(number.indexOf(5));
// console.log(names.splice(0, 2));

// errors 
// try {
    // block of code
// }
//  catch(error) {
 // block of code 
// }

// if some condition is not met then
//  throw new error("what you want to be displayed");

//express js for API

//call backs 
/* function first(secondFunc) {
    console.log('function one has finished executing.... now the second one will execute..');
    secondFunc();
}

function second() {
    console.log('i am the second function.');
}

first(second); */


// First Project
const days= document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const  seconds = document.getElementById("seconds");

let calculateTime = () => {
    const  birthDayTime = new Date("2022 jul 10");
    const currentTime = new Date();
    // subtracting the date times gives us the remaining milliseconds
    // no
    const remainigMicroSeconds = birthDayTime - currentTime;
    const remainingSeconds= remainigMicroSeconds / 1000;
    // getting the days
    const remainingDays = Math.floor(remainingSeconds / 3600 / 24);
    // console.log("Remaining Days" + remainingDays);
    // getting the hours 
    const remainingHours = Math.floor(remainingSeconds / 3600);
    // console.log(remainingHours);
    // getting the minutes 
    const remainingMinutes = Math.floor(remainingSeconds / 60) ;
    // getting the remaining secods 
    const remainingSec = Math.floor(remainingSeconds % 60);

    let timeFormat = (time) => {
        return time < 10 ? `0${time}` : time;
    }
    // lets show the remaining time on the screen
    days.innerHTML = timeFormat(remainingDays);
    hours.innerHTML = timeFormat(remainingHours);
    minutes.innerHTML = timeFormat(remainingMinutes);
    seconds.innerHTML = timeFormat(remainingSec);
}

setInterval(calculateTime, 100);


function search(element) {
    document.querySelector(element);
}

const testFunc = search(".second-project");
console.log(testFunc);
