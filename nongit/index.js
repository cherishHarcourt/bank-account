function dump1() {
  // let fruit = "banana";
  // console.log(fruit.at(4));
  // let arr = fruit.split("");
  // console.log(arr);

  // let greet = "Hello world";
  // console.log(greet.split(" "));

  // js operators

  // arithmetic operators
  let a = 6;
  let b = 3;
  console.log(a + b); // 9
  console.log(a - b); // 3
  console.log(a / b); // 2
  console.log(a * b); // 18
  console.log(a ** b); // 216
  console.log(a % b); // 0
  console.log(a % 4); // 2

  // compound operators
  // +=, a+=b, a=a+b, a= 6+3 = 9;
  console.log((a += b)); //9 , a has be updated to 9
  //-+
  console.log((a -= b)); // 6
  // /=
  console.log((a /= b)); // 2
  // *=
  console.log((a *= b)); // 6
  // %=
  console.log((a %= b)); // 0
  // ++ increment by 1
  console.log(++a); // 1
  console.log((a += 10)); // incrementing by 10
  console.log(--a);

  // comparison operators
  let c = 5;
  let d = 3;
  console.log(c > d); // true  greater than
  console.log(c < d); // false  less than
  console.log(c >= d); // true  greater than or equal to
  console.log(c <= d); // false  less than or equal to
  console.log(c != d); // true   not equal to
  console.log(c > 3 && d < 7); // true
  console.log(c < 3 && d < 7); // true
  console.log(c < 12 || d > 2); // true
  console.log(c > 12 || d > 2); // true
  console.log(c > 12 || d < 2); // false
  console.log(c == d); //false equal to
  console.log(c === d); // false strictly equal to

  let e = 2;
  let f = "2";
  console.log(e == f); // true
  console.log(c === f); //  false

  /* 
for logical or || is some how like addition
  condition1 condition2 output action
    0        1            1      true
    1        0            1       true
    1        1            1       true
    0        0            0        false

*/
  /* 
for logical and  && is like multiplication
  condition1 condition2 output action
    0        1            0      false
    1        0            0       false
    1        1            1       true
    0        0            0        false

*/

  // other operators
  // = assignment operator
  //! not or logical not
  let isLoggedIn = true;
  console.log(!!isLoggedIn);

  //! object

  let money = {
    // key:value,
    value: "$100",
    color: "white and green",
    size: "normal",
    tickness: "2mm",
    "serial Number": 9843948924829,
    dateProduced: "13/03/2024",
    original: true,
  };

  // getting object properties
  // objectName.key or objectName['key']
  let getDate = "dateProduced";
  console.log(money.value);
  console.log(money["value"]);
  console.log(money["serial Number"]);
  console.log(money[getDate]);
  // add new properties to an object
  // objectName.newKey=value; or Object.assign(objectName,{key:value,..,})
  money.age = 3;
  Object.assign(money, { owner: "chile", country: "USA" });
  console.log(money);
  // how to delete a property from an object
  //delete objectName.key
  delete money.age;

  // functions

  // normal function

  /* 
 syntax

  function functionName(parameter1,parameter2,....) {
     code block
  }

  to return from a fucttion 

  function functionName(parameter1,parameter2,....) {
     code block
     return something
  }
*/

  function greeting() {
    // creating a function
    console.log(`Good Morning Mr. Chile`);
  }

  // calling or invoking a function

  // functionName(argumen1, argument2);

  greeting(); // calling or invoking the function

  // make a function dynamic with parameters

  function greeting1(obj) {
    obj.name = obj.name == undefined ? "Chile" : obj.name;
    obj.title = obj.title == undefined ? "Mr." : obj.title;
    obj.greet = obj.greet == undefined ? "Goodday" : obj.greet;

    console.log(`${obj.greet} ${obj.title} ${obj.name}`);
  }

  greeting1({ name: "Sandra", title: "Miss." });

  // returning values from a function

  function sumTwo(a, b) {
    return a + b;
    console.log("end");
  }

  console.log(sumTwo(12, 5));

  function multiPurpose(a, b) {
    let addition = a + b;
    let subtration = a - b;
    let multiplication = a * b;
    let modulus = a % b;
    let power = a ** b;
    // addition: addition or addition
    return {
      addition,
      subtration,
      multiplication,
      modulus,
      power,
    };
    // return [addition, subtration, multiplication, modulus, power];
  }

  /* 
 how to destructure from a function returning more tha one value

 let {key1,key2,...} = functionName(para1,para2,...);
 or 
 let [key1,key2,...] = functionName(para1,para2,...);
*/

  let { addition, power } = multiPurpose(8, 2);
  console.log(addition, power);

  // arrow functions

  /* 
  function a(a,b) {
   return a+b;
  }

  let a = (a,b)=> {
   return a+b;
  }

  syntax of arrow function
  variableDeclarationKeyword functionName = (para1,para2,...)=> {
    code block;
     return something
  }
*/

  // let timesTwo = (a, b) => {
  //   // declaring an arrow function
  //   return a * b;
  // };
  let timesTwo = (a, b) => a * b; // is just a shortcut based on ES6
  // declaring an arrow function

  // calling or invoking a function
  console.log(timesTwo(15, 8));

  // hoisting
  let getId = () => {
    // declaring the function
    console.log("id");
    return "id";
  };
  getId(); // using the function before declaring it

  getCity(); // using the function before declaring it

  function getCity() {
    // declaring the function
    console.log("Port Harcourt");
  }
  console.log("************** HIGHER ARRAY METHOD ***************");

  //! Higher array method
  let amounts = [22, 77, 300, 1000, 5000, 20];
  let fruits = ["apple", "Orange", "grape", "banana", "pear"];

  /* 
  synthax of for of
  for(eachValueInTheArray of array ) {
    code block;
    console.log(eachValueInTheArray)
  }
*/

  /* 
  structure or template
  arrayName.higherArrayMethod((eachValue,index)=> { // ananymouse function | unreusable function
    code block 
    console.log(eachValue)
  })
  array.higherArrayMethod(myFunction);

  function myFunction (eachValue,index)=> { // reusable function
    code block 
    console.log(eachValue)
  }
*/

  // for of // not a higher array method
  for (a of amounts) {
    console.log(`using for of: ${a}`);
  }

  // higher array methods
  // forEach
  let byTwo = [];
  amounts.forEach((each, index) => {
    // console.log(`${each} is in index ${index}`);
    byTwo.push(each * 2);
  });
  console.log(amounts);
  console.log(byTwo);

  // or

  function myFunction(each, index) {
    console.log(`${each} is in index: ${index}`);
  }
  amounts.forEach(myFunction);
  // map

  let by50Percent = amounts.map((each) => {
    return each / 2;
  });

  console.log(by50Percent);
  //or
  function reduceBy30(each) {
    return each - each * 0.3;
  }
  let by30Percent = amounts.map(reduceBy30);

  console.log(by30Percent);

  //or
  function increaseByOne(each) {
    return each + 1;
  }

  let addOne = amounts.map(increaseByOne);
  console.log(addOne);

  // filter
  // [22, 77, 300, 1000, 5000, 20]
  // use filter to remove all the amounts that are less than 50
  function removeLessThan50(each) {
    if (50 < each) {
      return each;
    }
  }

  let lessThan50 = amounts.filter(removeLessThan50);
  console.log(lessThan50);
}

// sort
let amounts = [22, 77, 300, 1000, 5000, 20];
let fruits = ["apple", "Orange", "grape", "banana", "pear"];
console.log("****************** today 22/04/2024********************");
let sortedFruits = fruits.map((each) => each.toLowerCase()).sort();
console.log(sortedFruits);

console.log(amounts);
let sortedAmount = amounts.sort((a, b) => a - b);
console.log(sortedAmount);

// reduce
let summedAmounts = amounts.reduce((a, b) => {
  return (a += b);
});
console.log(summedAmounts);

/* 
  develop a psuedo-code algorithm to cook simple indomie

  > understand the problem:
    < indomie is a light food that does not take time
    < i'll need the following: heat source, pot, water, spoon, indomie and spices
  > logical steps:
   < get indomie
   > put pot with right amount water on a heat source
   > after 3min of boiling add spices and stire
   > after 2min take down and serve
  > convert to a script language:(js)
  function sinpleIndomie({indomie: 1,spices: ['default','onion','fresh pepe','egg']}) {
      console.log('adding indomie )
  }

*/

function prepareSimpleIndomie(obj) {
  /*  console.log(
    `adding ${obj.indomie} indomie with ${obj.indomie} cup of water inside a pot`
  );
  setTimeout(() => {
    console.log("placing the pot on a heat source");
  }, 1000 * 2);
  setTimeout(() => {
    console.log("boiling...");
  }, 1000 * 2.1);

  setTimeout(() => {
    console.log(`adding the following spices: ${obj.spices.join()} `);
  }, 1000 * 60 * (2.1 + 3));
  setTimeout(() => {
    console.log(`stiring... `);
  }, 1000 * 60 * (2.2 + 3.1));
  setTimeout(() => {
    console.log("boiling...");
  }, 1000 * 60 * (2.2 + 3.2));
  setTimeout(() => {
    console.log(`Indomie is ready! `);
  }, 1000 * 60 * (2.2 + 3.1 + 3));
  setTimeout(() => {
    console.log("please put in a plate serve and enjoy your meal");
  }, 1000 * 60 * (2.2 + 3.1 + 3.1)); */
  let counter = 0;
  let id = setInterval(() => {
    counter += 1;
    if (counter < 2) {
      console.log(
        `adding ${obj.indomie} indomie with ${obj.indomie} cup of water inside a pot`
      );
    }
    if (counter > 2 && counter <= 60 * 3) {
      // console.log(`boiling for ${counter} seconds`);
      console.log("boiling...");
    }
    if (counter > 60 * 3.1 && counter < 60 * 3.2) {
      console.log(`adding the following spices: ${obj.spices.join()} `);
    }
    if (counter > 60 * 3.2 && counter < 60 * 3.3) {
      console.log(`stiring... `);
    }
    if (counter > 60 * 3.3 && counter <= 60 * 4.8) {
      // console.log(`boiling for ${counter} seconds`);
      console.log("boiling...");
    }
    if (counter >= 60 * 4.9) {
      console.log(`Indomie is ready! `);
    }

    if (counter === 60 * 5) {
      console.log("please put in a plate serve and enjoy your meal");
      clearInterval(id);
    }
    // console.log(`${counter} seconds`);
  }, 1000);
}

prepareSimpleIndomie({
  indomie: 1,
  spices: ["default", "onion", "fresh pepe", "egg"],
});
