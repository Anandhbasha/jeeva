// // // let h1 = document.createElement("h1")
// // // h1.innerHTML = "Hello Welcome"
// // // document.body.append(h1)

// // // alert("Hello")

// // // console.log("Hello");

// // // Hoisting
// // //variable declaration
// // // var
// // // var a=10
// // //a-> variable
// // //=-> assignment opeartor
// // //10-> value
// // // console.log(b);
// // // a=20 //re assign
// // // var b=a
// // //type is var
// // // b=30
// // // var b= 60 //re declare
// // // console.log(b);
// // // Es6 concept ->Ecma Script
// // // let
// // // console.log(a);
// // // let a =20
// // // console.log(a);
// // //const
// // // const b = 30
// // // b=50
// // // console.log(b);

// // // var 
// // // global scope
// // // let,const
// // // local scope
// // // let a =20
// // // {
// // //     //string concordination
// // //     console.log("The a value is:"+a);  
// // // }

// // // operators
// // // Arithmetic 
// // // +,-,/,*,%,++,--
// // let a =10
// // let b =5
// // console.log(a+b);//15
// // console.log(a-b);//5
// // console.log(a*b);//50
// // console.log(a/b);//2
// // console.log(a%b);//0
// // console.log(++a);
// // console.log(a++);
// // console.log(a);
// // console.log(b--);
// // console.log(b);

// // console.log(a+b*(a/b)+3);

// // // 12+4*(3)+3
// // //12+12+3
// // //27

// // // () first Priority
// // // increment or decrement
// // // multiply
// // // division
// // // modulus
// // // addtion
// // // sub

// // // comparision
// // // >,<,<=,>=,!=,==,===
// // console.log(a>b);
// // console.log(a<b);
// // console.log(a<=13);
// // console.log(b>=4);
// // console.log(a!=b);
// // console.log(a=="12");
// // console.log(a==="12");

// // // assigment 
// // // =,+=,-=,*=,/=
// // a+=10
// // // a = a+10
// // a*=2
// // console.log(a);
// // a/=4
// // console.log(a);

// // // logical operator
// // // &&,||,!
// // console.log(a>b && a>=b && b!=4);
// // console.log(a<b || a>=b || b!=4);

// // // ternary

// // // Data types
// // // Simple data type
// // // premitive
// // let num1=10
// // // number
// // console.log(typeof(a));
// // // boolean
// // todayClass = true
// // // string
// // userName = "Abc"
// // console.log(typeof(userName));

// // // undefined
// // // let d = undefined;
// // // console.log(typeof(d));

// // // null
// // let d = null;
// // console.log(d);

// // // Nan
// // // Not a Number
// // console.log(a+userName);
// // console.log(a*userName);

// //Non Premitive
// // Array
// let arr1 = ["arun","ajay","bala"]
// console.log(arr1);
// // index
// // 0-arun -3
// // 1-ajay -2
// // 2-bala -1
// console.log(arr1[0]);


// // Object 
// const person  = {
//     name:"arun",
//     age:30,
//     address:"CBE",
//     family:{
//         dad:"abc",
//         mom:"xyz"
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(Object.keys(person),Object.keys(person.family));
// let key = Object.keys(person)
// // console.log(key[3]);


// functions
// let a = 10
// let b=20
// console.log(a+b);

// let c =30
// let d =40
// console.log(c+d);
// function functionname(){
// logic
// }
// function add(a,b){
//     console.log(a+b);    
// }

// // arrow
// const calls = (num1,num2)=>console.log(num1*num2)
// calls(2,4)
// // IFFI
// const iffis = (function(){
//     console.log("IFFI");
    
// })
// iffis()
// // //ananoums
// let add = function(a,b){
//     return(a*b);
    
// }
// console.log(add(10,20));
// // console.log(220);

// add(30,40)
// add(50,60)
// add(33,55)
// add(22,11)

// conditional Statement
// if
let age = 10
if(age>=18){
    console.log("He is Eligible to vote")
}


// ifelse
// if(age>=18){
//     console.log("He is Eligible to vote")
// }
// else{
//     console.log("Not Eligible");    
// }
// elseif
// if(age>19){
//     console.log("He is Adult");    
// }
// else if(age<13){
//     console.log("He is Child");    
// }else{
//     console.log("He is Teenager");
    
// }

// nestedif

// looping statement
// while
// let a = 10
// while(a>=0){ //a=0
//     console.log(a); //0 1 2 3 10
//     a-- //a=3
// }
// let arr = [10,20,30,40,50]
// 5
// index
// //0
// let a =arr.length-1
// while(a>=0){
//     console.log(arr[a]);
//     a--
// }
// // do while
// do{
//     console.log("Hello");
    
// }while(10==15)
// // for
// for(let a=0;a<arr.length;a++){
//     console.log(arr[a]);
    
// }
// for of
// for(let x of arr){
//     console.log(x);
    
// }
// // for in
// for(let x in arr){
//     console.log(arr[x]);
    
// }
// foreach
// arr.forEach((x)=>console.log(x))

// array methods
// let arr = [10,20,30,40,50]
// arr.pop()
// console.log(arr);
// arr.push(151)
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(33)
// console.log(arr);
// // Map
// arr.map((x)=>{
//     if(x%5===0){
//         console.log(x);        
//     }
// })

// x=10
// x=20
// x=30
// x=40
// x=50

// filter
// let even = arr.filter((item)=>item%2===0)
// console.log(even);
let arr = [20,10,30,40,50]

// let sum =0
// let total = 0
// while(sum<arr.length){ //0<5
//     total +=arr[sum];  //10  
//     ++sum
// }
// // console.log(total);
// const total = arr.reduce((x,y)=>x+y)
// //x= 0 y=10 10+0 = 10 
// //x= 10 y=20 10+20 = 30 
// //x= 30 y=30 30+30 = 60 
// //x= 60 y=40 60+40 = 100 
// //x= 100 y=50 100+50 = 150 
// console.log(total);

// indexOf
// console.log(arr.indexOf(11));

// includes
// console.log(arr.includes(10));
// find
// console.log(arr.find((x)=>x===11));

// sort
// console.log(arr.sort());

//reverse
//  console.log(arr.reverse());
//slice
// console.log(arr.slice(0,1));
// start point
// end point+1

//splice
// arr.splice(1,2)
// start
// end
arr.splice(1,3,15)
// index
// no of elements to remove
// replament value
console.log(arr);

//join
let ar1 = ["HTML","CSS","JS"]
let res = ar1.join("-")
console.log(res);

let text = "I Love Coding"
let newRes = text.split(" ").join("/")
console.log(newRes);

//concat
let a = [1,2]
let b=[3,4]
let result = a.concat(b)
console.log(result);

//some
// let newSome = arr.some(x=>x>100)
// console.log(newSome);

// // every
// let newSome = arr.every(x=>x>10)
// console.log(newSome);
//flat
let newArr = [1,2,[3,4]]
let newSome = newArr.flat()
console.log(newSome);









































