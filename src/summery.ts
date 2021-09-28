import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summery {
  constructor(public analyzer: Analyzer, public outputTarger: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarger.print(output);
  }
}
