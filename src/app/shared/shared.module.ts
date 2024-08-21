import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModeSwitcherModule } from 'ng-mode-switcher';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgModeSwitcherModule
    ],
    exports: [
        CommonModule,
        NgModeSwitcherModule
    ],
})
export class SharedModule { }
