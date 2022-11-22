// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops


console.log("I' ready!")

let hacker1;
hacker1 = "Michel";
console.log(`The driver's name is ${hacker1}`);

let hacker2;
hacker2 = "John"
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker1.length){
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.lenght} characters.`);
}
else if(hacker2.lenght > hacker1.lenght){
console.log(`It seems that the ${hacker2} has the longest name, it has ${hacker2.lenght} characters.`);
}

else {
  console.log(`Wow, you both have equally long names, XX characters!.`);
}


function addSpace(hacker) {
  return hacker.split('').join(' ');
}

console.log(addSpace(hacker1).toUpperCase(hacker1));

function reverseName(hacker) {
  return hacker.split('').reverse().join('');
}
console.log(reverseName(hacker2).toUpperCase(hacker2));