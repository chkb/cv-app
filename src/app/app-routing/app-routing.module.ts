import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth-guard.service';
import { CvComponent } from '../cv/cv.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Route[] = [
    {
        path: '',
        redirectTo: '/cv',
        pathMatch: 'full'
    },
    {
        path: 'cv',
        component: CvComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
