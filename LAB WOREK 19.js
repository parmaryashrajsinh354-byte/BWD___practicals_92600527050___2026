function calculate(operator) {
  // 1. Store user inputs inside variables and convert text to numbers
  const firstNumber = parseFloat(document.getElementById("num1").value);
  const secondNumber = parseFloat(document.getElementById("num2").value);

  // 2. Declare a variable using 'let' to hold the final answer
  let answer;

  // Check if either input is empty
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("result").innerText = "Please enter both numbers";
    return;
  }

  // 3. Perform calculation based on the clicked operator
  if (operator === "+") {
    answer = firstNumber + secondNumber;
  } else if (operator === "-") {
    answer = firstNumber - secondNumber;
  } else if (operator === "*") {
    answer = firstNumber * secondNumber;
  } else if (operator === "/") {
    answer = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by 0";
  }

  // 4. Display the result variable inside the HTML page
  document.getElementById("result").innerText = "Result: " + answer;
}
