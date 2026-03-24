// Sweta Singh’s Portfolio Functions

function showIntro(name) {
  console.log("Welcome to " + name + "’s portfolio!");
}

function listSkills(skills) {
  console.log("Skills: " + skills.join(", "));
}

function listHobbies(hobbies) {
  console.log("Hobbies: " + hobbies.join(", "));
}

// Calling functions with your values
let name = "Sweta Singh";
let skills = ["HTML", "CSS", "Bootstrap", "JavaScript"];
let hobbies = ["Gym", "Swimming"];

showIntro(name);
listSkills(skills);
listHobbies(hobbies);