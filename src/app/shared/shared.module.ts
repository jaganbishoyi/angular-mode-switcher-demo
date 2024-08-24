import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxModeSwitcherModule } from 'ngx-mode-switcher';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgxModeSwitcherModule
    ],
    exports: [
        CommonModule,
        NgxModeSwitcherModule
    ],
})
export class SharedModule { }
