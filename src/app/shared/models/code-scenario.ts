export class CodeScenario {
  currentIndex: number;
  nextIndex: number|undefined;
  codeLine: string;
  result: Map<string, any>;
  error: string | undefined;

  constructor(codeLine: string, result: Map<string, any>, currentIndex: number, nextIndex: number|undefined = undefined) {
    this.codeLine = codeLine;
    this.result = result;
    this.currentIndex = currentIndex;
    this.nextIndex = nextIndex;
  }
}
