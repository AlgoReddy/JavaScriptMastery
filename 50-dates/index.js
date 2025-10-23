// Dates = build class for the dates which includes the both date & time
const todayDate = new Date();
console.log(todayDate);
// above on is the default time which returns the exact date & time of we written

//------------------------------xxx ---------------------------
// Year -month -date -hours-min-seconds-ms
const randomDate = new Date(2025, 10, 23, 11, 23, 11, 23);
console.log(randomDate);
//writing date : diff style

const structredDate = new Date ("2025-04-03T03:22:22 ") ;
console.log(structredDate);

const date = new Date();
const year = date.getUTCFullYear();
const month=date.getMonth();
const day = date.getDay();
const hour= date.getHours();
const minutes=date.getMinutes();
const seconds=date.getSeconds();
const dayOfWeek =date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

date.setFullYear(2000);
date.setMonth(8);

