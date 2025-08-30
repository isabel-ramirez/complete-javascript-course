'use strict';

// ACTIVATING STRICT MODE
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log('I can drive :D');
}

// const interface = 'Audio';
// const private = 342;
*/

// FUNCTIONS
/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(`num is ${num}, it's a ${typeof num}!`);
*/

// FUNCTION DECLARATIONS VS EXPRESSIONS
// Function declaration
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// ARROW FUNCTIONS
// Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

// FUNCTIONS CALLING OTHER FUNCTIONS
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
*/

// REVIEWING FUNCTIONS
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// INTRODUCTION TO ARRAYS
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', 'Alice']; // TypeError Assignment to a constant variable

const jonas = ['Jonas', 'Scmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years[years.length - 1]]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
*/

// BASIC ARRAY OPERATIONS (METHODS)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // add to end of array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add to beginning of array
console.log(friends);

// Remove elements
friends.pop(); // remove last element
const poppedFriend = friends.pop();
console.log(poppedFriend);
console.log(friends);

friends.shift(); // remove first element
console.log(friends);

// Lookup
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23')); // uses strict equality, no type coercion
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend named Steven');
}
// CODING CHALLENGES
// Challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let avgScoreDolphins = calcAverage(44, 23, 71);
let avgScoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins!');
  }
};

checkWinner(avgScoreDolphins, avgScoreKoalas);

// Test 2
avgScoreDolphins = calcAverage(85, 54, 41);
avgScoreKoalas = calcAverage(23, 34, 27);
checkWinner(avgScoreDolphins, avgScoreKoalas);
