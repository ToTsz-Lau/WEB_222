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

byte1.toString()
console.log(byte1, byte1.toString(2), byte1.toString(16));

/** */
let ipAddress = '${byte1}.${byte2}.${byte3}.${byte4}';
console.log(ipAddress);


/** */
let ipInt 