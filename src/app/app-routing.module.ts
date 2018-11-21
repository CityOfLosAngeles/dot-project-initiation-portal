import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { StreetSelectComponent } from './street-select/street-select.component';


// the routes and how to navigate them 
const routes: Routes = [
  
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'newProject', component: NewProjectComponent},
  {path: 'streetSelect', component: StreetSelectComponent},
 
  
  {path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NewProjectComponent, StreetSelectComponent]
