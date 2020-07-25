import csv from "csvtojson";
import { createWriteStream, createReadStream } from "fs";

const writer = createWriteStream("./task1.3/task1.2/output.txt");

createReadStream("./task1.3/task1.2/csv/nodejs-hw1-ex1.csv")
  .pipe(csv())
  .on("data", function (row) {
    writer.write(row);
  })
  .on("error", function (error) {
    console.log("An error occurred: ", error);
  });
