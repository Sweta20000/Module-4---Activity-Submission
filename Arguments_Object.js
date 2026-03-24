function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addAll(10, 20, 30));
console.log(addAll(5, 15));     