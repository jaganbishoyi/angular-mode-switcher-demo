import { Component } from '@angular/core';
import { IConfig } from 'ngx-mode-switcher'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'demo-template';

    config: IConfig = {
        legend: {
            visible: true,
            SYSTEM: "auto"
        }
    };

    constructor() { }
}
