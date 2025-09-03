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
/*
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
*/

// INTRODUCTION TO OBJECTS
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);
*/

// DOT VS BRACKET NOTATION
/*
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends:'
);

if (jonas[interestedIn]) {
  console.log(`Jonas' ${interestedIn} is/are: ${jonas[interestedIn]}`);
} else {
  console.log(`Jonas does not have any info for ${interestedIn}.`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);
*/

// OBJECT METHODS
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // First version
  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }

  // Second version, added this keyword
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  // Third version, use function to update another property
  // Can be used to calculate/update age once,
  // and then we access the age from the age property
  // instead of running calcAge each time we want to get age
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge']());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
*/

// ITERATION THE FOR LOOP
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

// LOOPING ARRAYS, BREAKING & CONTINUING
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array (one way to do it)
  // types[i] = typeof jonas[i];

  // another way to fill the types array
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Learned this from TOP (map method)
console.log(years.map(year => 2037 - year));

// Continue & break
console.log('------ ONLY STRINGS ------');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(`${jonas[i]} is a string!`);
}

console.log('------ BREAK WITH NUMBER ------');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(`${jonas[i]} is a ${typeof jonas[i]}!`);
}
*/

// LOOPING BACKWARDS & LOOPS IN LOOPS
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

// Loop backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Nested loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------ Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}
*/

// THE WHILE LOOP
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR LOOP Lifting weights repetition ${rep}`);
}

let rep2 = 1;
while (rep2 <= 10) {
  console.log(`WHILE LOOP Lifting weights repetition ${rep2}`);
  rep2++;
}

// While loop without a counter
// roll a dice until you get a 6
let diceRoll = Math.trunc(Math.random() * 6) + 1;
while (diceRoll !== 6) {
  console.log(`You rolled a ${diceRoll}!`);
  diceRoll = Math.trunc(Math.random() * 6) + 1;

  if (diceRoll === 6) {
    console.log('You rolled a 6!! Loop is about to end :)');
  }
}
*/

// ASSIGNMENTS
console.group('JS Fundamentals - Part 2 ASSIGNMENTS');
// 1) Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const countryInfo1 = describeCountry('Japan', 123, 'Tokyo');
const countryInfo2 = describeCountry('South Korea', 51, 'Seoul');
const countryInfo3 = describeCountry('Mexico', 138, 'Mexico City');

console.group('1) Functions');
console.log(countryInfo1);
console.log(countryInfo2);
console.log(countryInfo3);

console.groupEnd();

// 2) Function Declaration vs Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.group('2) Function Declaration vs Expressions');
console.log(percentageOfWorld1(123));
console.log(percentageOfWorld1(51));
console.log(percentageOfWorld1(138));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld1(123));
console.log(percentageOfWorld1(51));
console.log(percentageOfWorld1(138));
console.groupEnd();

// 3) Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

console.group('3) Arrow Functions');
console.log(percentageOfWorld1(123));
console.log(percentageOfWorld1(51));
console.log(percentageOfWorld1(138));
console.groupEnd();

// 4) Functions Calling Other Functions
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};

console.group('4) Functions Calling Other Functions');
console.log(describePopulation('Japan', 123));
console.log(describePopulation('South Korea', 51));
console.log(describePopulation('Mexico', 138));
console.groupEnd();

// 5) Introduction to Arrays
const populations = [123, 51, 138, 342];

console.group('5) Introduction to Arrays');
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
console.groupEnd();

// 6) Basic Array Operations (Methods)
const neighbors = [
  'Argentina',
  'Bolivia',
  'Colombia',
  'Guyanaaaaaaa',
  'Paraguay',
  'Peru',
  'Suriname',
  'Uruguay',
  'Venezuela',
];

console.group('6) Basic Array Operations (Methods)');
neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbors[neighbors.indexOf('Guyanaaaaaaa')] = 'Guyana';
console.log(neighbors);
console.groupEnd();

// 7) Introduction to Objects
const myCountry = {
  country: 'Brazil',
  capital: 'Brasilia',
  language: 'Portuguese',
  population: 213,
  neighbors: neighbors,
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
  },
};

console.group('7) Introduction to Objects');
console.log(myCountry);
console.groupEnd();

// 8) Dot vs Bracket Notation
console.group('8) Dot vs Bracket Notation');
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);
myCountry['population'] += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
console.groupEnd();

// 9) Object Methods
console.group('9) Object Methods');
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
console.groupEnd();

// 10) Iteration: The for Loop
console.group('10) Iteration: The for Loop');
const numVoters = 50;

for (let i = 1; i <= numVoters; i++) {
  console.log(`Voter number ${i} is currently voting!`);
}

console.groupEnd();

// 11) Looping Arrays, Breaking & Continuing
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

const percentages3 = populations.map(pop => percentageOfWorld1(pop));

console.group('11) Looping Arrays, Breaking & Continuing');
console.log('percentages', percentages);
console.log('percentages2', percentages2);
console.log('percentages3', percentages3);
console.groupEnd();

// 12) Looping Backwards and Loops in Loops
console.group('12) Looping Backwards and Loops in Loops');

const listOfNeighbors = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
  }
}
console.groupEnd();

// 13) The while Loop
console.group('13) The while Loop');
const percentages4 = [];

let i = 0;
while (i < populations.length) {
  percentages4.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages4);
console.groupEnd();

console.groupEnd();

// CODING CHALLENGES
console.group('CHALLENGES');
// Challenge 1
console.group('Challenge 1');
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
console.groupEnd();

// Challenge 2
console.group('Challenge 2');
const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
console.groupEnd();

// Challenge 3
console.group('Challenge 3');
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.bmi})!`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`
  );
}
console.groupEnd();

// Challenge 4
console.group('Challenge 4');

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
  let tip = calcTip(bills1[i]);
  tips1.push(tip);
  totals1.push(bills1[i] + tip);
}

console.log(bills1, tips1, totals1);

const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage1(totals1));

console.groupEnd();
console.groupEnd();

// TOP LOOPS & ARRAYS MODULE
const numbers = [1, 2, 3, 4, 5, 6];

const sumOfTripledEvens = function (arr) {
  // Filter for only evens
  const evenNums = arr.filter(num => num % 2 === 0);

  // Triple all even numbers
  const tripledEvens = evenNums.map(num => num * 3);

  console.log(tripledEvens);

  // Sum all tripled evens
  const tripledEvenSum = tripledEvens.reduce(
    (sum, current) => sum + current,
    0
  );

  return tripledEvenSum;
};

const sumOfTripledEvens2 = function (arr) {
  return arr
    .filter(num => num % 2 === 0)
    .map(num => num * 3)
    .reduce((sum, current) => sum + current, 0);
};

console.log(sumOfTripledEvens(numbers));
console.log(sumOfTripledEvens2(numbers));

// TOP/ JS INFO ARRAY METHODS EXERCISES

// 1) Translate border-left-width to borderLeftWidth
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
const camelize = function (str) {
  return str
    .split('-')
    .map((word, idx) =>
      idx === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
};

console.log(camelize('list-style-image'));
console.log(camelize('background-color'));
console.log(camelize('-webkit-transition'));

// 2) Filter range
// filterRange([5, 3, 8, 1], 1, 4) => [3, 1]
const filterRange = function (arr, a, b) {
  return arr.filter(num => num >= a && num <= b);
};

const arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));
console.log(arr);
