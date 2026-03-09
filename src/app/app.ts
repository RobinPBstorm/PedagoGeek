import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideMenu } from './core/aside/aside-menu/aside-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'PedagoGeek';
}
