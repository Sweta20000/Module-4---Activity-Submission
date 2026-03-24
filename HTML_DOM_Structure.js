// Change content
document.getElementById("intro").innerHTML = "Sweta Singh’s Portfolio";

// Change style
document.querySelector("p").style.color = "blue";

// Add new element
let newSkill = document.createElement("p");
newSkill.textContent = "New Skill: JavaScript";
document.body.appendChild(newSkill);