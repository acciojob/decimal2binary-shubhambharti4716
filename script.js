function decimalToBinary(num) {
  //Write you code here
    let bin = 0;
    let rem, i = 1, step = 1;
    while (num != 0) {
        rem = num % 2;
        console.log(`Step ${step++}: ${num}/2, Remainder = ${rem}, Quotient = ${parseInt(num / 2)}`);
        num = parseInt(num / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

window.decimalToBinary = decimalToBinary;
