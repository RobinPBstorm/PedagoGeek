import {BaseComputerLanguageReader} from './base-computer-language-reader';
import {CodeScenario} from '../../models/code-scenario';
import {VariableInformation} from '../../models/variable-information';

export class PseudoCodeReader extends BaseComputerLanguageReader {
  override interpret(codeLine: string, index: number, lastScenario:CodeScenario|undefined = undefined): CodeScenario {
    const variables = lastScenario ? new Map<string,any>(lastScenario.result) : new Map<string, any>();

    const words = codeLine.split(',').join(' ').split(' ').filter(value => value !== '');

    let scenario: CodeScenario;
    try {
      if (words.length != 0) {
        if (words[0].toLowerCase() === 'variable') {
          this.declaration(variables, words);
        } else if (words.includes('=')) {
          this.assignation(variables, words);
        }
      }


      scenario = new CodeScenario(codeLine, variables, index);
      scenario.nextIndex = index + 1;
    }
    catch(error: any) {
      scenario = new CodeScenario(codeLine, variables, index);
      scenario.error = error.message;
      scenario.nextIndex = undefined;

    }

    return scenario;
  }

  override split(completCodeLine:string): string[] {
    return completCodeLine.split('\n');
  }

  private declaration(variables: Map<string, any>, words: string []): void{
    for (let i = 1; i < words.length; i+=3) {
      variables.set(words[i], new VariableInformation(words[i+2], undefined));
    }
  }
  private assignation(variables: Map<string, any>, words: string []): void{
    let index = words.findIndex(value => value === '=');

    try {
      let variable : VariableInformation = variables.get(words[index-1])

      console.log(words);
      for (let i = index+1; i < words.length; i++) {
        if (variables.has(words[i])) {
          words[i] = variables.get(words[i]).value.toString();
        }
      }
      console.log(words);

      let value = words.length > 3 ?
        this.resolveMathOperation(variables, ...words.splice(index+1)) :
        ( words[2].includes("'") ?
          words[2] : (
            words[2].includes(".") ?
            parseFloat(words[2]) :
            parseInt(words[2],10)));

      variable.setValue(value);
    } catch (error) {
      throw error;
    }
  }

  private resolveMathOperation(variables: Map<string, any>, ...words: string[]): number|undefined {
    console.log(words);
    switch (words[1]) {
      case '-':
        return parseInt(words[0]) - parseInt(words[2]);
      case '+':
        return parseInt(words[0]) + parseInt(words[2]);
      case '/':
        return parseFloat(words[0]) / parseInt(words[2]);
      case '//':
      case 'DIV':
        return parseInt(words[0]) / parseInt(words[2]);
      case '*':
        return parseInt(words[0]) * parseInt(words[2]);
      case '%':
        return parseInt(words[0]) % parseInt(words[2]);
      default:
        throw Error(`Opérateur invalide`)
        return undefined;
    }
  }
}
