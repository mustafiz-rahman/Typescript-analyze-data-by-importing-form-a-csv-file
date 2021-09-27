"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//console.log(matches);
var matchWinHome = 0;
var matchWinAway = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Newcastle" && match[5] === MatchResult_1.matchResult.winHome) {
        matchWinHome++;
    }
    else if (match[2] === "Newcastle" && match[5] === MatchResult_1.matchResult.winAway) {
        matchWinAway++;
    }
}
console.log("Match win at Home for Man United is " + matchWinHome + "\nMatch win at Away for Man United is " + matchWinAway + "    ");
