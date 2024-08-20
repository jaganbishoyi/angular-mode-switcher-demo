import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgModeSwitcherModule } from 'ng-mode-switcher';
import { DemoComponent } from './demo/demo.component';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgModeSwitcherModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
