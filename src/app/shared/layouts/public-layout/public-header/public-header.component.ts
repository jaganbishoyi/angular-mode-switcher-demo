import { Component } from '@angular/core';
import { IConfig } from 'ngx-mode-switcher';

@Component({
    selector: 'app-public-header',
    templateUrl: './public-header.component.html',
    styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent {
    title = "Angular Mode Switcher";

    config: IConfig = {
        legend: {
            visible: true,
            SYSTEM: "auto"
        }
    };
    constructor() { }
}
