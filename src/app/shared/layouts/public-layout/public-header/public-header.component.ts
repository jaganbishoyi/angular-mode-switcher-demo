import { Component, OnInit } from '@angular/core';
import { IConfig } from 'ngx-mode-switcher';

@Component({
    selector: 'app-public-header',
    templateUrl: './public-header.component.html',
    styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
    title = "Angular Mode Switcher";

    config: IConfig = {
        legend: {
            visible: true,
            SYSTEM: "auto"
        }
    };
    constructor() { }

    ngOnInit(): void {
    }

}
