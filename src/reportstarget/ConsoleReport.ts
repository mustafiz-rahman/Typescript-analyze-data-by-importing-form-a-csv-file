import { OutputTarget } from "../summery";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
