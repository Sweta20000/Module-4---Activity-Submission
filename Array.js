let skills = ["HTML", "CSS", "Bootstrap"];
skills.push("JavaScript"); 
console.log(skills); 
skills.pop(); 
console.log(skills); 
skills.unshift("Git"); 
console.log(skills); 
skills.shift(); 
console.log(skills);
console.log(skills.length); // 3
for (let skill of skills) {
  console.log("Sweta’s skill: " + skill);
}