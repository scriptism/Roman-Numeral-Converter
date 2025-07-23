document.getElementById("convert-btn").addEventListener("click", function () {
  const input = document.getElementById("number").value.trim();
  const output = document.getElementById("output");

  // Check if input is empty or not a number
  if (input === "" || isNaN(input)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  const num = parseInt(input, 10);

  // Check if number is less than 1
  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  // Check if number is 4000 or greater
  if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  // Convert to Roman numeral
  output.textContent = convertToRoman(num);
});

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}
