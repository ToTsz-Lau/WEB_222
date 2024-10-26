/*
Create a variable label and assign it the value "senecacollege". 
Create another variable tld and assign it "ca". 
Create a third variable domainName that combines label and tld to produce the value "senecacollege.ca".
*/

let label = "senecacollege";
let tld = "ca";
let domainName = label + '.' + tld;

console.log(domainName);

/*
Create a variable isSeneca and assign it a boolean value (true or false) 
depending on whether or not domainName is equal to "senecacollege.ca". 
HINT: use === and don’t write true or false directly.
*/

let isSeneca = false; 
if(domainName === "senecacollege.ca")
    isSeneca = true;
else
    isSeneca = false;

console.log("value for isSeneca is:", isSeneca);

//Create a variable isNotSeneca and assign it the inverse boolean value of isSeneca.
let isNotSeneca = !isSeneca;
console.log(isNotSeneca);

/*Create four variables byte1, byte2, byte3, byte4, 
and assign each of these a value in the range 0-255*/
let byte1, byte2, byte3, byte4;
byte1 = 120;
byte2 = 130;
byte3 = 2;
byte4 = 244;

/*
Convert byte1 to a String using .toString(), and console.log() the result. 
What happens if you use toString(2) or toString(16) instead?
*/

console.log("The following string is to demonstrate the toString function");
console.log(byte1.toString(), byte1.toString(2), byte1.toString(16), byte1,);

/**Create a variable ipAddress and assign it the value of combining 
 * your four byteN variables together, separated by "." */
let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
console.log("ipAddress is: ", ipAddress);

/** Create a variable ipInt and assign it the integer value of 
 * bit-shifting (<<) and adding your byteN variables.*/

let ipInt = (byte1 << 24) | (byte2 << 16) | (byte3 << 8) | byte4
console.log("ipInt is: ", ipInt);

/**Create a variable ipBinary that contains the binary representation of the ipInt */
let ipBinary = ipInt.toString(2)
console.log("ipBinary is: ", ipBinary);

/*Create a variable statusCode, and assign it the value for the "I'm a teampot" HTTP status code */
let statusCode = 418

/*Write an If statement that checks to see if your statusCode is a 4xx client error. */
if (statusCode > 400 && statusCode < 500)
    console.log("the statusCode", statusCode, "is a 4xx client error.")

/*Write a switch statement that checks your statusCode for all possible 1xx information responses. 
In each case, you should console.log() the response text associated with the status code, 
or "unknown information response" if the status code is not known. */
switch (statusCode) {
    case 100:
      console.log("Continue");
      break;
    case 101:
      console.log("Switching Protocol");
      break;
    case 102:
      console.log("Processing (WebDAV)");
      break;
    case 103:
      console.log("Early Hints");
      break;
    default:
      console.log("unknown information response");
      break;
  }

  function is2xx(status)
  {
    if(status > 200 && status < 300)
        return true;
    else return false;
  }
  console.log(is2xx(statusCode));

  /*Create a variable studentName and assign your name. 
  Create another variable studentAge and assign it your age.
  Use console.log() to pirnt out a sentence that includes both.*/

  let studentName = "ToTsz";
  let studentAge = 5;
  console.log(`${studentName} is ${studentAge} years old`);

  /*Create a variable isEven and assign it a boolean value 
  (true or false) depending on whether a given number num is even or not. */

  let isEven = true; 
  let number = 7; 
  if(number%2 != 0)
    isEven = false; 
console.log(`isEven: ${isEven}`);

/*Create a variable isOdd and assign it the inverse boolean value of isEven. */
let isOdd = !isEven;

/*Create a variable radius and assign it a value of 10. Calculate the area of 
a circle with this radius and assign the result to a variable area. */
let radius = 10; 
let area = Math.PI * radius * radius;
console.log (`area is ${area.toFixed(2)}`);

/*Create a variable temperatureInCelsius and assign it a value. 
Convert this temperature to Fahrenheit and assign the result to 
a variable temperatureInFahrenheit.*/
let temperatureInCelsius = 27;
let temperatureInFahrenheit = temperatureInCelsius * 9/5 + 32;
console.log(`temperature in Celcius is: ${temperatureInCelsius} and temperature in Fahrenheit is: ${temperatureInFahrenheit.toFixed(2)}`);


/*Create a variable heightInFeet and assign it a value. 
Convert this height to meters and assign the result to a variable heightInMeters.*/
let heightInFeet = 10;
let heightInMeters = heightInFeet / 0.3048;
console.log(`height in Feet is ${heightInFeet}, height in Meters is ${heightInMeters.toFixed(2)}`);

/*Create a variable seconds and assign it a value.
Convert this time to minutes and seconds*/
let seconds = 90;
let minutes = Math.floor(seconds/60);
let remainingSeconds = seconds%60;
console.log(`${seconds} seconds = ${minutes} minutes and ${remainingSeconds} seconds`);

/*Create a variable score and assign it a vlue.
Write an if statement that checks if the score is an A,B,C,D,F and assign to grade*/
let score = 60;
let grade = 'A';
if(score < 60)
    grade = 'F';
else if(score < 70)
    grade = 'D';
else if(score < 80)
    grade = 'C';
else if(score < 90)
    grade = 'B';

console.log("the grade is", grade);

/*Write a switch statement that checks the value of a 
variable day and console.log()s whether it is a weekday or weekend.*/
let day = 3
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}