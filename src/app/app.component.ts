import { Component } from '@angular/core';
import { IConfig } from 'ng-mode-switcher'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-light-dark-mode';

  config: IConfig = {
    legend: {
      visible: true,
      // LIGHT: "light",
      // DARK: "dark",
      SYSTEM: "auto"
    }
  };

  constructor() {

  }
}
