// ASSIGNMENTS
console.group('JS Fundamentals Part 1 - ASSIGNMENTS');

// 1) Values and Variables
let country = 'United States';
const continent = 'North America';
let population = 342;

console.log(
  `the ${country} in ${continent} has a population of ${population} million`
);

// 2) Data Types
const isIsland = false;
let language;

console.group('2) Data Types');
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
console.groupEnd();

// 3) let, const, and var
language = 'English';
// isIsland = true; Invalid assignment to const

// 4) Basic Operators
console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let avgPopulation = 33;
console.log(population < avgPopulation);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

// 5) Strings and Template Literals
// same as description variable above

// 6) Taking Decisions: if/else statement
// population = 10;
if (population > avgPopulation) {
  console.log(
    `${country}'s population is ${
      population - avgPopulation
    } million above average.`
  );
} else {
  console.log(
    `${country}'s population is ${
      avgPopulation - population
    } million below average`
  );
}

// 7) Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> 123 (string to number) < 57 -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> '114' + 9 - 4 - 2 -> '114' + 3 -> '1143'

// 8) Equality Operators == vs ===
// let numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

// if (numNeighbors === 1) {
//    console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// 8) Logical Operators
if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// 9) The switch Statement
switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place in number of native speakers');
    break;
  case 'Hindi':
    console.log('Number 4 in numbe rof native speakers');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// 10) The Conditional (Ternary) Operator
// population = 4;
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average.`
);

console.groupEnd();

// CODING CHALLENGES
console.group('JS Fundamentals Part 1 - CODING CHALLENGES');

// Challenge 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
let markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);

// Challenge 2
let output;

if (bmiMark > bmiJohn) {
  output = `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`;
} else if (bmiJohn < bmiMark) {
  output = `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`;
} else {
  output = `John and Mark have the same BMI (${bmiJohn}!)`;
}

console.log(output);

// Challenge 3
let avgDolphinScore = (97 + 112 + 101) / 3;
let avgKoalasScore = (109 + 95 + 106) / 3;
const minScore = 100;

if (avgDolphinScore === avgKoalasScore && avgDolphinScore >= 100) {
  if (avgDolphinScore >= 100) {
    console.log(`TIE! both teams have a score of ${avgDolphinScore}!`);
  } else {
    console.log(`AWWW!! both teams lose! they scored ${avgDolphinScore}!`);
  }
} else if (avgDolphinScore > avgKoalasScore && avgDolphinScore >= 100) {
  console.log(`DOPLHINS WIN! ${avgDolphinScore} to ${avgKoalasScore}`);
} else {
  if (avgKoalasScore >= 100) {
    console.log(`KOALAS WIN! ${avgKoalasScore} to ${avgDolphinScore}`);
  }
}

// Challenge 4
const standardTip = 0.15;
const alternateTip = 0.2;

let billValue = 430;
let tipAmount =
  billValue *
  (billValue >= 50 && billValue <= 300 ? standardTip : alternateTip);

console.log(
  `The bill was $${billValue}, the tip was $${tipAmount}, and the total value $${
    billValue + tipAmount
  }.`
);
