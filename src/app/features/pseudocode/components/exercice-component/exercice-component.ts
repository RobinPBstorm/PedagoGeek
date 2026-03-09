import { Component } from '@angular/core';
import { PgTextarea } from '../../../../shared/components/pg-textarea/pg-textarea';
import {ComputerLanguageEnum} from '../../../../core/enum/computer-language.enum';

@Component({
  selector: 'app-exercice-component',
  inputs: ["language"],
  imports: [
    PgTextarea
  ],
  templateUrl: './exercice-component.html',
  styleUrl: './exercice-component.css',
})
export class ExerciceComponent {
  language: string | undefined;

  userCode : string = '';
  variableOutput: string = '';

  run() {
    if (!this.language || !Object.values(ComputerLanguageEnum).includes(this.language)) {
      this.variableOutput = 'language invalide';
    } else {

    }
  }
}
