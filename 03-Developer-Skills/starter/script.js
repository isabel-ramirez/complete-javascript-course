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

// Challenge 2

const freelanceWeekSummary = function (arr) {
  const totalHours = arr.reduce((sum, dayHours) => sum + dayHours, 0);
  const daysWorked = arr.filter(dayHours => dayHours > 0).length;
  const avgHours = totalHours / daysWorked;
  const isFullTime = totalHours >= 35;

  let max = arr[0];
  let maxDay = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxDay = i;
    }
  }

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const summary = `WEEKLY SUMMARY
    Total hours worked: ${totalHours} hrs
    Average daily hours: ${Math.round(avgHours * 10) / 10} hrs
    Day with most hours worked: ${daysOfWeek[maxDay]}, ${arr[maxDay]} hrs 
    Number of days worked: ${daysWorked} days
    Full-time ${isFullTime ? 'yes' : 'no'}`;

  console.log(summary);
};

const test3 = [7.5, 8, 6.5, 0, 8.5, 4, 0];
freelanceWeekSummary(test3);
