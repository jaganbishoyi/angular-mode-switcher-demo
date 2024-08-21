import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PublicLayoutComponent } from "./public-layout.component";
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { SharedModule } from '../../shared.module';


const components = [
    PublicFooterComponent,
    PublicHeaderComponent,
    PublicLayoutComponent,
];

@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: components,
    exports: components,
})
export class LayoutsModule { }
