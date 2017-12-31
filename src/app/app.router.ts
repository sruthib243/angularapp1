import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent } from './app.component';
import {LoginComponent } from './login/login.component';
import {RegisterComponent } from './register/register.component';


export const router: Routes = [



{path: 'app-login', component: LoginComponent },
{path: 'app-register', component: RegisterComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
