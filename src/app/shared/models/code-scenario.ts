export class CodeScenario {
  codeLine: string;
  result: string|undefined;

  constructor(codeLine: string, result: string|undefined) {
    this.codeLine = codeLine;
    this.result = result;
  }
}
