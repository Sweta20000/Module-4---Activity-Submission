// Greeting function expression
const greet = function(name) {
  return "Hello " + name + "! Past history: HTML, CSS, Bootstrap mastered.";
};
// Skills listing arrow function
const listSkills = (skills) => "Skills: " + skills.join(", ");
// Hobbies listing arrow function
const listHobbies = (hobbies) => "Hobbies: " + hobbies.join(", ");
let name = "Sweta Singh";
let skills = ["HTML", "CSS", "Bootstrap", "JavaScript"];
let hobbies = ["Gym", "Swimming"];
console.log(greet(name));
console.log(listSkills(skills));
console.log(listHobbies(hobbies));