import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ApplicantsInfoComponent } from './applicants-info/applicants-info.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditScreenComponent } from './edit-screen/edit-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ApplicantsInfoComponent,
    DasboardComponent,
    HeaderComponent,
    EditScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,MatFormFieldModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
