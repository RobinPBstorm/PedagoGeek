import {CodeScenario} from '../../models/code-scenario';

export abstract class BaseComputerLanguageReader {

  abstract split(completCodeLine:string): string[];
  abstract interpret(codeLine: string, index: number, lastScenario:CodeScenario|undefined): CodeScenario;

  read(codeLine: string): CodeScenario[] {
    let codeLines = this.split(codeLine);

    let result = [];
    let i: number | undefined = 0;
    while (i !== undefined && i < codeLines.length) {
      const action: CodeScenario = this.interpret(codeLines[i],i, result.length == 0 ? undefined : result[result.length - 1]);
      result.push(action);
      i = action.nextIndex;
    }
    return result;
  }
}
