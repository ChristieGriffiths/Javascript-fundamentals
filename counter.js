/*

In this challenge you'll need to use the function setInterval. It works the same way as setTimeout, but rather than executing the given function once after a delay, it executes it repeatedly. For example, if we give 2000 for the number of milliseconds, the function will execute every 2 seconds:

setInterval(myFunction, 2000); // myFunction will execute every 2 seconds
In a new file counter.js:

Declare a variable counter initialised at the value 0 — this value will need to change, so use let rather than const.
Declare a function called increment that:
increments the value of counter by 1
and prints it using console.log
Using setInterval, call this function every second so the counter is incremented and printed every second.
If you've done the above correctly, you should be able to run the file and see the counter being incremented and printed every second:

$ node counter.js
1
2
3
(...)

*/

let counter = 0; 

const increment = () => {
  counter += 1; 
  console.log(counter)
}

setInterval(increment, 1000)