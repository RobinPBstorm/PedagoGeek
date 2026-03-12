import { Component } from '@angular/core';
import { ComputerLanguageEnum } from '../../../../core/enum/computer-language.enum';
import { FormsModule } from '@angular/forms';
import { ComputerLanguageHelper } from '../../../../shared/helpers/computer-language.helper';
import {VariableInformation} from '../../../../shared/models/variable-information';
import {CodeScenario} from '../../../../shared/models/code-scenario';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-exercice-component',
  inputs: ["language"],
  imports: [
    FormsModule,
    MatSliderModule,
  ],
  templateUrl: './exercice-component.html',
  styleUrl: './exercice-component.css',
})
export class ExerciceComponent {

  language: string | undefined;

  userCode : string = '';
  userConsole: string = '';
  variableOutput: string = '';

  indexLine: number|undefined = undefined;
  scenarisReaden : CodeScenario[] = [];
  editMode: boolean = true;
  readSpeed = 1;


  run() {
    if (!this.language || !Object.keys(ComputerLanguageEnum).includes(this.language)) {
      this.variableOutput = 'language invalide';
    } else {
      this.userCode = this.clearUseCode(this.userCode);
      const scenaris = ComputerLanguageHelper.ExtractScenarios(this.userCode, this.language);

      this.indexLine = 0;
      this.scenarisReaden = scenaris;

      this.editMode = false;

      this.readScenaris(this.indexLine);
    }

  }
  private clearUseCode(content: string): string {
    return content.split('\n').filter(line => line !== '').join('\n');
  }

  private readScenaris(index: number) {
    this.variableOutput = '';
    if (this.scenarisReaden && this.scenarisReaden.length > 0) {
      for (const key of this.scenarisReaden[index].result.keys()) {
        this.displayValue(key, this.scenarisReaden[index].result.get(key));
      }
    }
    this.indexLine = index + 1;
    if (this.indexLine === undefined || this.indexLine >= this.scenarisReaden.length) {
      this.scenarisReaden = [];
      this.indexLine = undefined;

      this.editMode = true;
    } else {
      setTimeout(() => {this.readScenaris(this.indexLine!.valueOf())}, this.readSpeed*1000)
    }

  }

  private displayValue(key: string, value: VariableInformation) {
    if (value.type === 'string') {
      this.variableOutput +=`${key} = '${value.value}'\n`;
    } else {
      this.variableOutput +=`${key} = ${value.value}\n`;
    }
  }
}
