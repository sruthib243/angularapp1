import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {DataService} from './register/app.service';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [

{path: '', redirectTo: '/app-main', pathMatch: 'full' },
{path: 'app-main', component: MainComponentComponent },
{path: 'home', component: HomeComponent },
{path: 'login', component: LoginComponent },
{path: 'register', component: RegisterComponent },
{path: 'parent', component: ParentComponent },
{path: 'child', component: ChildComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponentComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),     
    routes,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
