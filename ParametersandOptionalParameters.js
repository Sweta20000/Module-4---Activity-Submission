function showSkills(name = "Sweta Singh", skills = ["HTML", "CSS", "Bootstrap"]) {
  console.log(name + " has skills: " + skills.join(", "));
}

showSkills();  
// Output: Sweta Singh has skills: HTML, CSS, Bootstrap

showSkills("Sweta Singh", ["HTML", "CSS", "Bootstrap", "JavaScript"]);  
// Output: Sweta Singh has skills: HTML, CSS, Bootstrap, JavaScript