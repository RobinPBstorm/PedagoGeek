import { Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  imports: [],
  templateUrl: './<%= dasherize(name) %>.html',
  styleUrl: './<%= dasherize(name) %>.css'
})
export class <%= classify(name) %> {

}
