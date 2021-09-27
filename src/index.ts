import fs from "fs";
import { MatchReader } from "./MatchReader";
import { matchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader('football.csv'); 
const matchReader = new MatchReader(csvFileReader);
matchReader.load();




//console.log(matches);
let matchWinHome = 0;
let matchWinAway = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Newcastle" && match[5] === matchResult.winHome) {
    matchWinHome++;
  } else if (match[2] === "Newcastle" && match[5] === matchResult.winAway) {
    matchWinAway++;
  }
}

console.log(`Match win at Home for Man United is ${matchWinHome}
Match win at Away for Man United is ${matchWinAway}    `);
