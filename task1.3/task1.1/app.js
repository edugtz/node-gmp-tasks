process.stdin.setEncoding("utf8");

process.stdin.on("readable", function () {
  let input;

  while ((input = process.stdin.read()) !== null) {
    const reversedInput = input.split("").reverse().join("");
    process.stdout.write(`${reversedInput} \n`);
  }
});
