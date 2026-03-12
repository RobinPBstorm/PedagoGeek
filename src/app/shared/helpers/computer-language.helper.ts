import {CodeScenario} from '../models/code-scenario';
import {ComputerLanguageEnum} from '../../core/enum/computer-language.enum';
import {PseudoCodeReader} from './computer-language-reader/pseudocode-reader';

export class ComputerLanguageHelper {
  static ExtractScenarios(content: string, language: string): CodeScenario[] {
    switch(language) {
      case ComputerLanguageEnum.pseudocode:
        const reader = new PseudoCodeReader();
        return reader.read(content);
        break;
      default:
        return [];
    }

  }
}
