let portfolio = {
  name: "Sweta Singh",                  
  age: 25,                              
  skills: ["HTML", "CSS", "Bootstrap"], 
  hobbies: {                           
    discipline: "Gym",
    fun: "Swimming"
  },
  showIntro: function() {              
    return "Welcome to " + this.name + "’s portfolio!";
  }
};
console.log(portfolio.name);            
console.log(portfolio.skills[2]);      
console.log(portfolio.hobbies.fun);     
console.log(portfolio.showIntro());