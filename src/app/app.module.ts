import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LayoutsModule } from './shared/layouts/public-layout/layouts.module';
import { PageNotFoundComponent } from './views/public/page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutsModule,
        SharedModule,
        BrowserAnimationsModule,
        NgHttpLoaderModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: "toast-top-right",
            preventDuplicates: true,
            closeButton: true,
            autoDismiss: false
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
