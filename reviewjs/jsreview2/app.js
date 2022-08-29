////////////////////
// Easy Going
////////////////////
for(let i = 0; i<20; i++) {
  console.log(i)
}

///////////////////
// Get Even
///////////////////

// for(let i = 0; i < 200; i+=2) {
//   console.log(i)
// }


///////////////////
//Fizz Buzz
///////////////////


// for(let i = 0; i<100; i+=2){
//   let fizzB = ""
//   if (i%3==0){
//       fizzB += "FIZZ"
//   }
//   if (i%5==0){
//       fizzB+= "BUZZ"
//   }
//   if (i%5!=0 && i%3!= 0){
//       fizzB = i
//   }
//   console.log(fizzB)
// }



///////////////////
//Wild Wild Life
///////////////////

const wolfy = ['Wolfy','Wolf','16','Yukon Territory']
const sharky = ['Sharky','Shark','20','Left Coast']
const plantee = ['PLantee','PLant','5000','Mordor']
const pargee = ['Porgee','Porg','186','Ahch-To']
const dart = ['D Art','Demogorgan Dog','2','Upside Down']
plantee[2]++
wolfy[3] = 'Gotham City'
dart[3] = [dart[3], 'Hawkins']
wolfy.shift('Gameboy')
console.log(wolfy)
console.log(plantee)
console.log(dart)












////////////////////
//Yell at the Ninja Turles
///////////////////

// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (const turtles of ninjaTurtles) {
//     console.log(turtles.toUpperCase());
// }




//////////////////////////
// Methods, Revisited
/////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle','Django Unchained', 'Titanic'];

// // console.log(favMovies.indexOf('Titanic'));

// //1. 
// favMovies.sort(); // sorted the elements according to increasing or alphabetical order
// console.log(favMovies);

// //2.
// favMovies.pop(); // removes last element of the array

// //3.
// favMovies.push('Guardians of the Galaxy'); // adds to the end of the array

// //4.
// favMovies.reverse(); // reverses the array

// //5. 
// favMovies.shift(); // removes the first element of the array and shifts to the right by 1

// //6. 
// console.log(favMovies.unshift()); // returns the length of the array
// console.log(favMovies);

// //7.
// favMovies.splice(favMovies.length-1,1);
// favMovies.push('Avatar');

// //8. & 9.
// let movieLength = favMovies.length;
// let sliceIndex = (movieLength / 2);
// let sliceVar = favMovies.slice(sliceIndex);
// console.log(sliceVar);

// //11.
// console.log(favMovies.indexOf('Fast and Furious')); // returns -1 as indication it DNE in array

// 12. no, as declaring const favMovies as an array means we can mutate it as an array, but cannot change favMovies to another type like String or Integer







/////////////////////////
//Where is Waldo
////////////////////////


// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods","Waldo"]]];

// whereIsWaldo.splice(1,1);

// whereIsWaldo[1][2] = 'No One';

// console.log(whereIsWaldo[2][1][1]);








/////////////////////////
//Excited Kitten
////////////////////////

// for (let i = 0; i < 20; i++) {
//     let randomAns = Math.floor(Math.random() * 3);
//     if (i == 0) {
//         console.log('Love me, pet me! HSSSSSS!');
//     }
//     if (i % 2 == 0) {
        
//         switch(randomAns) {
//             case 0:
//                 console.log('...human...why you taking pictures of me?');
//                 break;
//             case 1:
//                 console.log('...the catnip made me do it...');
//                 break;
//             case 2:
//                 console.log('...why does the red dot always get away...');
//                 break;
//         }
//     } else {
//         console.log('Love me, pet me! HSSSSSS!');
//     }
// }


















/////////////////////////
//Find The Median
////////////////////////


// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
// console.log(nums.length)
// let median = Math.floor(nums.length/2);
// nums.sort();
// console.log(nums[median]);

///////////////////////////////////////////////////////////////
//// RETURN OF THE CLOSETS
///////////////////////////////////////////////////////////////

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     'right sock',
//     "GA hoodie",
//     "green pants",
//     "yello knit hat",
//     "marshmallow peeps"
// ];