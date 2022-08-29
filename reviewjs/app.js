//               Q+A
// 1: 3 dways to delcare Variables (var, let, const)
// 2: selecting the value and typing the new value
// 3: We simply use the = to give the variable a new value.
// 4: declare - declaring a variable without assigning a value
//    assign -  assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
//    define - The define() function can be used to load the modules (module can be an object, function, class or a code which is executed after loading a module)
// 5: It allows the designer to focus on main logic without being distracted by programming languages syntax.
// 6:  I would say 60% of thinking how to code it and the rest of the time should be anwering and coding.






// //STRINGS//
// //create a varialble
// let firstVariable; 
// //assign it the value of the string "Hello World"
// firstVariable= "Hello World"
// //change the value of this variable to any number
// firstVariable = 12
// //store the value of firstvariable in a new variable called secondV
// let secondVariable = firstVariable;
// //change the value of secondvariable to any string
// secondVariable = "any"
// //what is the value of firtsVariable = 12
// console.log(firstVariable)
//  //create a variable YourName
// let yourName = "RAIN RAIN"

// console.log(`Hello my name is ${yourName}`)

// //BOOLEANS
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a<b);
// console.log(c>d);
// console.log('Name' == 'Name');
// // for the next two, use only && or ||
// console.log(true || false);
// console.log(false && false && false && false && false || true)
// console.log(false==false)
// console.log(e === 'Kevin')
// console.log(a+b===c)
// console.log(a*a===d)
// console.log(48 =='48')

// //THE FARM

// function cow(animal) {
//   if (animal === 'cow') {
//     console.log ('mooooo')
//   }
//   else{
//     console.log ('Hey! You are not a Cow')
//   }
    

// }

// cow('dog')

// //DRIVER'S ED
// function canDrive(age) {
//   if (age >= 16) {
//       console.log('Here are the keys!');
//   } else if (age < 16) {
//       console.log("Sorry, you're too young.");
//   }
// }
// canDrive(12);
// canDrive(23)


// //section 2

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }
// for(let i = 10; i <= 400; i++) {
//   console.log(i)
// }
// let x = 12
// while(x<4000){
//   console.log(x)
//   x += 3
// }

// //Get Even
// for(let i = 0; i<100; i++) {
//   let even = i
//   if(i%2===0) {
//     even += "an even number"
//   }
//   console.log(even)
//

//GIVE ME FIVE
// 1.
// for (let index = 0; index <= 100; index++) {
//     if(index % 5 === 0) {
//         console.log('I found a ' + index + ". High five!");
//     }
// }
// 2.
// for (let index = 0; index <= 100; index++) {
//     if(index % 5 === 0) {
//         console.log('I found a ' + index + '. High five!');
//     } else if(index % 3 === 0) {
//         console.log('I found a ' + index + '. Three is a crowd');
//     }
// }
// //3.
// for (let index = 0; index <= 100; index++) {
//     if (index % 5 === 0 && index % 3 ===0) {
//         console.log('I found a ' + index + '. High five! Three is a crowd');
//     } else if(index % 5 === 0) {
//         console.log('I found a ' + index + '. High five!');
//     } else if(index % 3 === 0) {
//         console.log('I found a ' + index + '. Three is a crowd!');
//     }
// }

// Savings account

// var bank_account = 0;
// for (let index = 1; index <= 10; index++) {
//     bank_account += index;
// }
// console.log(bank_account);

// var bank_account = 0;
// for (let index = 1; index <= 100; index++) {
//     let newAmount = index * 2;
//     bank_account += newAmount;
// }

// console.log(bank_account);



//////ARRAYS & CONTROL FLOWWWW/////////
//A:TALK ABOUT IT

//1: indexes
//2:  yes 
//3: A Grocery list


//B: EASY DOES IT
// 


//C: Accessing elements: Givene Arrays: const randomThings = [1, 10, "Hello", true]

// randomThings[0];
// //2. 
// randomThings[2] = "World";
// //3.
// console.log(randomThings);

//D: Change Values // const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// //1.
// ourClass[2];
// //2.
// ourClass[4] = "Octocat";
// //3.
// ourClass.push("Cloud City");

// //E: MIX IT UP 
// const myArray = [5, 10, 500, 20]
//  myArray.push('Aegon', 'Food');

// myArray.shift();

// myArray.unshift('Bob Marley');

// myArray.pop()

// myArray.reverse()



// F: Biggie Smalls
// let myInteger = 500;
// if(myInteger < 100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }


//  G: Monkey in the Middle
// function monkey(myInteger){
//     if(myInteger < 5) {
//         console.log("little number");
//     } else if(myInteger > 10) {
//         console.log("big number");
//     } else {
//         console.log('Not my number!');
//     }
// }
// monkey(4);
// monkey(11);
// monkey(8);

////////////////////////////////////////
// //H: What's in your closet
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];



///////////////////////////////////////////////


//Funtions
// A: printGreeting ... skip

// //B: printCool
// const printCool = function(name) {
//   console.log(name + 'is cool')
// }
// printCool('Rainier')

// //C: calculateCube
// function calculateCube(cubeNumber) {
//   return Math.pow(cubeNumber, 3)
// }
// console.log(calculateCube(5))

// //D: isVowel
// const isVowel = (letter) => {
//   const vowels = ['A','E','I','O','U']
//   if(vowels.includes(letter.toUpperCase())) {
//     return true;
//   }else {
//     return false;
//   }
// }
// console.log(isVowel("B"));

// // E. getTwoLengths
// const getTwoLengths = (string1, string2) => {
//     let output = [];
//     output.push(string1.length, string2.length);
//     return output;
// }
// console.log(getTwoLengths("food", "drinks"));

// // F. getMultipleLengths
// const getMultipleLengths = (stringArray) => {
//     let arrayLs = [];
//     stringArray.forEach(word => arrayLs.push(word.length));
//     return arrayLs;
// }
// console.log(getMultipleLengths(["cookie", "milk", "pepperoni", "fish", "tea"]));

// // G. maxOfThree
// function maxOfThree(num1, num2, num3) {
//     if(num1 >= num2 && num1 >= num3){
//         return num1
//     } else if(num2 >= num3){
//         return num2
//     } else {
//         return num3
//     }

// }
// console.log(maxOfThree(22, 21, 22));

// // H. printLongestWord
// function printLongestWord(arrayString) {
//     let lString = "";
//     for (let index = 0; index < arrayString.length; index++) {
//         if (arrayString[index].length > lString.length) {
//             lString = arrayString[index];
//         }
//     }
//     return lString;
// }
// console.log(printLongestWord(["soda", "pop", "carrot", "fights"]));

// Objects

// A. Make a user object
//1.
// const user = {

// }
//2.
// const user = {
//   name: "rainiiierrr",
//   email: "rainrain23@gmail.com",
//   age: 36,
//   purchased: []
// }

// // B. Update the user
// //1.
// user.email = "rainier.1123@gmail.com";
// //2.
// user.age++;

// // C. Adding keys and values
// //1.
// user.location = "234 West Avenue, Pittsburgh, PA";

// // D. Shopaholic!
// //1:
// user.purchased.push("carbohydrates");
// //2.
// user.purchased.push("peace of mind");
// //3.
// user.purchased.push("Merino jodhpurs");
// //4.
// // console.log(user.purchased[2]);

// // E. Object-within-object
// //1.
// user.friend = {
//   name: "Rain",
//   age: 32,
//   location: "Fresno, CA",
//   purchased: []
// }
// //2.
// // console.log(user.friend.name);
// //3.
// // console.log(user.friend.location);
// //4.
// user.friend.age = 45;
// //5.
// user.friend.purchased.push("The One Ring");
// //6.
// user.friend.purchased.push("A latte");
// //7.
// // console.log(user.friend.purchased[1]);

// // F. Loops
// //1.
// // user.purchased.forEach(item => console.log(item));
// //2.
// // user.friend.purchased.forEach(item => console.log(item));

// // G. Functions can operate on objects
// //1.
// // const updateUser = () => {

// // }
// //2.
// // const updateUser = () => {
// //     user.age++;
// // }
// //3.
// const updateUser = () => {
//   user.age++;
//   user.name.toUpperCase();
// }
// //4.
// const oldAndLoud = (person) => {
//   console.log(person);
//   person.name.toUpperCase();
//   person.age++;
// }

// oldAndLoud(user); {

// }
///////////////////////////////////////////////////////REVIEW ///////////////////

