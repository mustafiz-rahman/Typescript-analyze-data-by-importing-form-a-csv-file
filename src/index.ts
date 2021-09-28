import fs from "fs";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportstarget/ConsoleReport";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { Summery } from "./summery";
import { HtmlReport } from "./reportstarget/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

//console.log(matches);

const summary = new Summery(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
