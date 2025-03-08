import { Routes } from '@angular/router';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { createComponent } from '@angular/core';
import { CreateComponentComponent } from './create-component/create-component.component';
import { AllTaskComponentComponent } from './all-task-component/all-task-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { myAuthGuardServiceGuard } from './my-auth-guard-service.guard';
import { FooterComponentComponent } from './footer-component/footer-component.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'menu',
        component:MenuComponentComponent,
        canActivate:[myAuthGuardServiceGuard]
    },
    {
        path:'create',
        component:CreateComponentComponent,
        canActivate:[myAuthGuardServiceGuard]
    },
    {
        path:'alltasks',
        component:AllTaskComponentComponent,
        canActivate:[myAuthGuardServiceGuard]
    },
    {
        path:'update/:id',
        component:UpdateComponentComponent
    },
    {
        path:'view/:id',
        component:ViewComponentComponent
    },
    {
        path:'login',
        component:LoginComponentComponent
    },
    {
        path:'footer',
        component:FooterComponentComponent
    }
];
