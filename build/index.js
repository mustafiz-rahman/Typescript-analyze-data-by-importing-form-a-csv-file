"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
var dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);
//console.log(matches);
var matchWinHome = 0;
var matchWinAway = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Newcastle" && match[5] === MatchResult_1.matchResult.winHome) {
        matchWinHome++;
    }
    else if (match[2] === "Newcastle" && match[5] === MatchResult_1.matchResult.winAway) {
        matchWinAway++;
    }
}
var n = 103;
var i = (n * (n + 1)) / 2;
console.log(i);
console.log("Match win at Home for Man United is " + matchWinHome + "\nMatch win at Away for Man United is " + matchWinAway + "    ");
