import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize'


import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesService } from './services/companies/companies.service';

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent},
  { path: '', component: CompaniesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
