import { MatchData } from "../MatchData";
import { Analyzer } from "../summery";
import { matchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let matchWin = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === matchResult.winHome) {
        matchWin++;
      } else if (
        match[2] === this.teamName &&
        match[5] === matchResult.winAway
      ) {
        matchWin++;
      }
    }
    return `Team ${this.teamName} wins ${matchWin} game.`;
  }
}
