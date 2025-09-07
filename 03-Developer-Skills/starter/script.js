// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// iterate through the array to get each element
// build a string using the element and the element index (or iteration number)
// append the string we built this iteration to an overall string
// return the overall string

const printForecast = function (arr) {
  let forecast = '...';
  for (let i = 0; i < arr.length; i++) {
    // Error in temp reading that day
    if (isNaN(arr[i])) continue;

    const dayString = `${arr[i]}C in ${i + 1} days...`;
    forecast += dayString;
  }
  console.log(forecast);
};

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

printForecast(test1);
printForecast(test2);
