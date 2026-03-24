let portfolio = {
  name: "Sweta Singh",
  age: 25,
  skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  hobbies: ["Gym", "Swimming"],

  // Method inside object
  showIntro: function() {
    return "Welcome to " + this.name + "’s portfolio!";
  }
};
console.log(portfolio.name);      
console.log(portfolio.skills[2]);  
console.log(portfolio.showIntro()); 