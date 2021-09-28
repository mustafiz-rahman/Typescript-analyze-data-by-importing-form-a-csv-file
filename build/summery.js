"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summery = void 0;
var Summery = /** @class */ (function () {
    function Summery(analyzer, outputTarger) {
        this.analyzer = analyzer;
        this.outputTarger = outputTarger;
    }
    Summery.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarger.print(output);
    };
    return Summery;
}());
exports.Summery = Summery;
