import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsInfoComponent } from './applicants-info/applicants-info.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { EditScreenComponent } from './edit-screen/edit-screen.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:ApplicantsInfoComponent},
    {path:'dasboard',component:DasboardComponent},
    {path:'edit-status',component:EditScreenComponent}
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
