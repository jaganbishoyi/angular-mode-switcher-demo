import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/layouts/public-layout/public-layout.component';

const routes: Routes = [
    {
        path: "",
        component: PublicLayoutComponent,
        loadChildren: () =>
            import("./views/public/public.module").then((m) => m.PublicModule),
    },
    {
        path: "**",
        redirectTo: "/page-not-found",
    },
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: "top",
    onSameUrlNavigation: "ignore",
    relativeLinkResolution: 'legacy'
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
