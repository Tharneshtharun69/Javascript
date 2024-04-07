<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Even or Odd Checker</title>
</head>
<body>
<h2>Enter a non-negative integer:</h2>
<input type="number" id="numberInput">
<button onclick="checkEvenOrOdd()">Check</button>
<p id="result"></p>

<script>
function checkEvenOrOdd() {
    const number = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");
    
    if (isNaN(number) || number < 0) {
        resultElement.textContent = "Invalid input. Please enter a non-negative integer.";
        return;
    }

    switch (number % 2) {
        case 0:
            resultElement.textContent = "Even";
            break;
        case 1:
            resultElement.textContent = "Odd";
            break;
    }
}
</script>
</body>
</html>
