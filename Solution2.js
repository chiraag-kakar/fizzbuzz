// Alternative solution building the message by concatenation
 for (let number = 1; number <= 100; number++) {
  // Initial message is empty
  let message = "";
  if (number % 3 === 0) {
    // Add "Fizz" to the message
    message += "Fizz";
  }
  if (number % 5 === 0) {
    // Add "Buzz" to the message
    message += "Buzz";
  }
  if (message === "") {
    // Empty message => the number is neither divisible by 3 nor by 5
    message = number;
  }
  console.log(message);
}
