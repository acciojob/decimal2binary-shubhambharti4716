function decimalToBinary(num) {
  // Check if the input is not a valid number
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    return "Invalid integer.";
  }

  // Handle the special case for 0
  if (num === 0) {
    return "0";
  }

  let binary = "";
  while (num > 0) {
    // Append the least significant bit (LSB) of num to binary
    binary = (num % 2) + binary;
    // Right-shift num by 1 to process the next bit
    num = Math.floor(num / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
