/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

var today = new Date();
var date = today.getDate();
var day = today.getDay();
// Array of day names
// var daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var hour = today.getHours();
// var mins = today.getMinutes();
// var sec = today.getSeconds();

// console.log("Today is " + daylist[day] + " and Date is ", date);
// console.log("Curent time is", hour, ":", mins, ":", sec);

/*
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

// console.log((today.getMonth()+1),"-",today.getDate(),"-",today.getFullYear())

/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
*/

var side1 = 5
var side2 = 6
var side3 = 7

var s = (side1+side2+side3)/2
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
console.log(area);