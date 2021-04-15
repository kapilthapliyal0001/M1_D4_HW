//jshint esversion:6

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1, l2) {
  let result_area = l1 * l2;
  return result_area;
};

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(n1, n2) {
  if (n1 != n2) {
    return n1 * n2;
  } else {
    return n1 + n2;
  }
};


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(n1, n2) {
  if (n1 > 19) {
    return 3 * (Math.abs(n1, n2));
  } else {
    return Math.abs(n1, n2);
  }
};


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */


const boundary = function(n) {
  if ((n >= 20 && n <= 100) || (n = 400)) {
    return true;
  }
};

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

const strivify = function(input) {
  if ("Strive" === input.slice(0, 5)) {
    return input;
  } else {
    return ("strive" + input);
  }
};

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

const check3and7 = function(n) {
  if ((n % 4 == 0) || (n % 3 == 0)) {
    return true;
  }
};


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

let new_string = "";

const reverseString = function(input) {
  for (i = input.length - 1; i >= 0; i--) {
    new_string.concat(reverseString[i]);
  }
};

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

const upperFirst = function(input) {
  return input[0].toUpperCase();
};



/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

const cutString = function(input) {
  let result = input.slice(0).slice(-1);
  return result;
};

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
let arr = [];

const giveMeRandom = function(n) {
  for (i = 0; i < n; i++) {
    let num = Math.floor((Math.random() * 10));
    arr.push(num);
  }
};

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
