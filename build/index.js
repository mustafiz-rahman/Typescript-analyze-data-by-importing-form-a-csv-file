"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
//console.log(matches);
var matchWinHome = 0;
var matchWinAway = 0;
var matchResult;
(function (matchResult) {
    matchResult["winHome"] = "H";
    matchResult["winAway"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Newcastle" && match[5] === matchResult.winHome) {
        matchWinHome++;
    }
    else if (match[2] === "Newcastle" && match[5] === matchResult.winAway) {
        matchWinAway++;
    }
}
console.log("Match win at Home for Man United is " + matchWinHome + "\nMatch win at Away for Man United is " + matchWinAway + "    ");
