// 1
// let a = [];
// let b = [];
// console.log(a==b);
// console.log(a===b);


// 2
// let a= [];
// let b = a;
// console.log(a==b);
// console.log(a===b);

// 3
// let z = [1,2,3,4,];
// let a = { name : "anil"};
// console.log(...z);

// 4
// console.log(typeof NaN);

//5
// let data = 10 - -10;
// console.log(data);
// return 20 as methmetical rule 

//6
// const set = new Set([1,2,3,4])
// console.log(set);
// ouyput Set(4) { 1, 2, 3, 4 }

//7
// let data = { name : "Anil"};
// console.log(delete data.name);
// console.log(data)

//8
// const data = ["k" , "l" , "m"];
// const [y,z] = data;
// console.log(y,z);
// const [y] = data; is using array destructuring. In array destructuring, the left-hand side (the part in square brackets) extracts values from the array on the right-hand side.

//9
// how to get name propertity without . oprator 
// const data = {name : "Anil" , age : "29"};
// const {name } = data;
// console.log(name);

//10
// marge 2 objects
// const data = {name : "Anil" , age : "29"};
// const data2 = {sName: "sidhu" , father : "mahesh"};

// const data3 = {...data,...data2};
// console.log(data3);


//11
// let data = {name : "Anil" , age : "29"};
// let data2 = {sName: "sidhu" , father : "mahesh"};
// data = {...data,...data2};
// console.log(data)
// { data: { name: 'Anil', age: '29' }, sName: 'sidhu', father: 'mahesh' }
// if we use let than we got this output if we use const we don't get this output

//12
// const name = "Anil";
// console.log(name());

//13
// const reult = false && {} && true;
// console.log(typeof reult);

//14
// if we got first value as a null that it will pick the last value value autometically

//15
// console.log(Promise.resolve(5))

// 16
// console.log("🚀" === "");


// 17 
// let name = "sidhu"

// const getname = () => {
//  console.log(name);
//  let name = "sid"
// }

// getname()
// it will give error Cannot access 'name' before initialization


// 18
// console.log(`${(x => x)('i love')} to program `);
// (x => x)('i love') is invoking the arrow function immediately with the string 'i love' as its argument.

// 19
// function sumvalues(x,y,z){
//  return x+y+z;
// }
// console.log(sumvalues([1,2,3]));

// 21
// let k = "subs"
// let j = 21;

// console.log(isNaN(k))
// console.log(isNaN(j))


// 22
// let person = {name : "Arin"};

// Object.seal(person)
// after the seal we can not add property just modify that it 

// 23
// let c = 3 ** 3
// console.log(c);  27


// 24
// let a = 2;
// setTimeout(()=>{
//  console.log(a);
// },0);
// a = 100;


// 25
// let a = 1
// let b = 1
// let c = 2 
// console.log( a=== b === --c);
// first check a === b give true and after that it will check 1 === true 

// 26
// console.log([[]][[]]);
// console.log([[[[]]]])


// 27
// let a  = navigator.permissions
// console.log(a);


// 28
// function fruit(){
//  console.log(name);
//  console.log(price)

//  var name = "apple"
//  let price = 25;
// }

// fruit()



// 29
// for (let index = 0; index < 3; index++) {
//  console.log(index);
//  setTimeout(()=>console.log(index),5000)
// }

// 0
// 1
// 2
// 0
// 1
// 2



// 30
// console.log(+true);
// console.log(typeof +true);
// The + operator converts true to 1.


// 31
// console.log(!"anil");
// console.log(typeof ("anil"));
// false
// string


// 32
// let number = 64;

// console.log(number++)
// console.log(++number)
// console.log(number);


// 33
// function getargs(...args){
//  console.log(typeof args);
// }
// getargs("kk")
// it will alays return a object 


// 34
// async function foo(){
//  return "hello world"
// }

// const result = await foo();
// console.log(result);



// 35
// const str = "hi i am kuldeep";

// const newarray = str.split(" ")

// let result = "";

// newarray.map((item) => {
//  let sum = item.charAt(0).toUpperCase();
//  let sum2 = item.substring(1);

//  result = result + sum + sum2 + " "

// })

// console.log(result + "==>" + newarray);





// 37
// let reult = "";

// for(let i = 0 ; i < newarray.length;i++){
//  let sum = newarray[i].toUpperCase().charAt(0)
//  let newstr = newarray[i].substring(1);
//   sum = sum + newstr;

//   reult = reult + sum + " ";

// }

// console.log(reult);



// 38
// function aone(){
//  return 2
// }

// function atwo(){
//  return 4
// }

// let a = (aone(),atwo());
// console.log(a);

// console.log(atwo());
// console.log(aone())


// let b = (5,6);
// console.log(b);


console.log(true === "")

