import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EsriMapComponent } from './esri-map/esri-map.component';

import { HttpClientModule } from '@angular/common/http';
import { NewProjectComponent } from './new-project/new-project.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { StreetSelectComponent } from './street-select/street-select.component';
import { NewProjectService } from './new-project.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    EsriMapComponent,
    NewProjectComponent,
    TopBannerComponent,
    StreetSelectComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule

   
  ],
  providers: [MatDatepickerModule, NewProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
