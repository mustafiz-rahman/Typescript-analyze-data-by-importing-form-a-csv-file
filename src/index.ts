import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";
import { matchResult } from "./MatchResult";

const reader = new CsvFileReader("football.csv");
reader.read();

const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);
//console.log(matches);
let matchWinHome = 0;
let matchWinAway = 0;

for (let match of reader.data) {
  if (match[1] === "Newcastle" && match[5] === matchResult.winHome) {
    matchWinHome++;
  } else if (match[2] === "Newcastle" && match[5] === matchResult.winAway) {
    matchWinAway++;
  }
}

console.log(`Match win at Home for Man United is ${matchWinHome}
Match win at Away for Man United is ${matchWinAway}    `);
