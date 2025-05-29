// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


const today = new Date();
const yearToday = today.getFullYear(); // Get the current year  
const monthToday = today.getMonth() + 1; // Get the current month (0-11, so add 1)
const dateToday = today.getDate(); // Get the current date (1-31)
const dayToday = today.getDay(); // Get the current day (0-6, where 0 is Sunday)
const hoursNow = today.getHours(); // Get the current hour (0-23)
const minutesNow = today.getMinutes(); // Get the current minutes (0-59)
const secondsSinceEpoch = Math.floor(today.getTime() / 1000); // Get seconds since January 1, 1970
console.log(`Year today: ${yearToday}`);
console.log(`Month today: ${monthToday}`);
console.log(`Date today: ${dateToday}`);
console.log(`Day today: ${dayToday}`);
console.log(`Hours now: ${hoursNow}`);
console.log(`Minutes now: ${minutesNow}`);
console.log(`Seconds since January 1, 1970: ${secondsSinceEpoch}`);
