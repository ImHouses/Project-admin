import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { Project } from '../models/project';
import { Company } from '../models/company';
import { CompaniesService } from '../services/companies/companies.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ProjectsService } from '../services/projects/projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  initDate: Date;
  endDate: Date;
  companies: Array<any>;
  currentCompany: Company;
  @Output() onProjectAdded = new EventEmitter<Project>();
  @Output() onFormHidden = new EventEmitter<Boolean>();
  @Input() project: Project;
  @Input() isFormShow: boolean;
  @Input() title: string;
  @Input() edit: boolean;

  constructor(service: CompaniesService, private projectsService: ProjectsService, private router: Router) {
    this.isFormShow = true;
    service.getCompanies()
      .subscribe(res =>  {
        this.companies = res;
        this.companies.slice(0, 5);
        this.currentCompany = this.companies[0];
      });
  }

  ngOnInit() {
  }

  /**
   * Shows the form.
   */
  showForm() {
    this.isFormShow = true;
  }

  /**
   * Hides the form.
   */
  hideForm() {
    this.isFormShow = false;
    this.onFormHidden.emit(this.isFormShow);
  }

  onSubmit() {
    if(this.edit) {
      this.editProject();
    }else {
      this.addProject();
    }
  }

  private editProject() {
    this.project.companyId = this.currentCompany._id;
      this.projectsService.editProject(this.project)
        .subscribe((res) => {
          if(res.status == 200) {
            this.isFormShow = false;
            window.alert('Proyecto editado satisfactoriamente');
            location.reload();
          } else {
            window.alert('Ocurrió un error al editar el proyecto');
          }
        });
  }

  private addProject() {
    this.onProjectAdded.emit({_id: this.project._id,
      name: this.project.name,
      initDate: this.project.initDate,
      endDate: this.project.endDate,
      companyId: this.currentCompany._id});
    this.hideForm();
  }


}
