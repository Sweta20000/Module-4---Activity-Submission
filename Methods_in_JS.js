// Object with methods
let portfolio = {
  name: "Sweta Singh",
  skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  // Method to show intro
  showIntro: function() {
    return "Welcome to " + this.name + "’s portfolio!";
  },
  // Method to list skills
  listSkills: function() {
    return "Skills: " + this.skills.join(", ");
  }
};
// Calling methods
console.log(portfolio.showIntro());
console.log(portfolio.listSkills());