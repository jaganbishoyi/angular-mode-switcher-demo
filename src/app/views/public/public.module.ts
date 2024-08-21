import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
    declarations: [
        PublicComponent,
        DemoComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule
    ]
})
export class PublicModule { }
