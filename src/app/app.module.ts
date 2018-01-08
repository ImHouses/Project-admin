import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompaniesService } from './services/companies/companies.service';
import { ProjectsService } from './services/projects/projects.service';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { HttpModule } from '@angular/http';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent},
  { path: '', component: ProjectsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    ProjectsComponent,
    ProjectFormComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CompaniesService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
