let name = "Sweta Singh"; // global scope
function showSkill() {
  let skill = "Bootstrap"; // local scope
  console.log("Sweta’s skill: " + skill);
}

showSkill();
// console.log(skill); // ❌ Error: skill is not defined
function greet() {
  console.log("Hello " + name); // accessible inside function
}
greet();
console.log(name); // accessible outside too