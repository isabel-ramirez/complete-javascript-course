'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  // Destructuring parameter objects
  // -- We only pass one argument (an object) into the function
  // -- If we had passed multiple parameters (one for each item in the obj), the order when calling the function would matter.
  // -- Destructuring is done immediately when the object is received, the names must match in function declaration and when calling the function (passing the object).
  // -- Good thing is the order does not need to match, just the names.
  orderDelivery: function({starterIdx = 1, mainIdx = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`);
  }
};

// LECTURE 110 - Object Destructuring
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIdx: 2,
  starterIdx: 2,
})

// -- Not all arguments passed, that's ok! because we have default values
restaurant.orderDelivery({
  starterIdx: 3,
  address: 'Via del Sole, 21',
})

// Basic syntax
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Changing the variable names so that they are different than the property names
// -- Useful for third-party data (like from API calls)
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(name, openingHours, categories);

// Default values for a property that does not exist
// -- Useful for third-party data (like from API calls)
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring
let g = 111;
let h = 999;
const obj = {g: 23, h: 7, i: 14};

// -- Here we have to wrap it in () because when we start a line with {}, js 
//    expects a code block. Since we cannot assign anything to a code block,
//    we get an error. Trick is to wrap destructuring assignment in ().
({g, h} = obj);
console.log(g, h);

// Destructuring nested objects
const {fri: {open, close}} = openingHours;
console.log(open, close);

const {openingHours: {sat: {open: openHour, close: closeHour}}} = restaurant;
console.log(openHour, closeHour);

// LECTURE 108 - Destructuring Arrays
console.group('LECTURE 108 - Destructuring Arrays');
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Swap values
[secondary, main] = [main, secondary];
console.log(main, secondary);

// -- Without destructuring you would need a 'temp' variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);


// Receive 2 return values from a function
// -- Quick way of immediately creating 2 variables out of a function call
const [starter1, main1] = restaurant.order(2, 0);
console.log(`I got ${starter1} and ${main1}!`);


// Destructure a nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);  // 2, [5, 6]

// -- Destructuring inside destructuring
const [w, x, [y, z]] = nested;
console.log(w, x, y, z);  // 2, 4, 5, 6


// Set default value for the variables while destructuring them
// -- Useful for when we don't know the length of an array (e.g. array from an API)
const [a, b, c] = [8, 9];
console.log(a, b, c);  // 8, 9, undefined

const [d = 0, e = 0, f = 0] = [8, 9];
console.log(d, e, f);  // 8, 9, 0
console.groupEnd();
