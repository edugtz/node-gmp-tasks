import { stdin, stdout } from "process";

stdin.addListener("data", (input) => {
  const reversedInput = input.reverse().toString().trim();

  stdout.write(`${reversedInput} \n`);
});
