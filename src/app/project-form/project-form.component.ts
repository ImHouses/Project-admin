import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../models/project';
import { Company } from '../models/company';
import { CompaniesService } from '../services/companies/companies.service';
import { forEach } from '@angular/router/src/utils/collection';

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

  constructor(service: CompaniesService) {
    this.isFormShow = true;
    service.getCompanies()
      .subscribe(res =>  {
        this.companies = res;
        this.companies.slice(0, 5);
      });
    this.currentCompany = new Company();
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
    console.log(this.currentCompany);
    this.project.company = this.currentCompany;
    console.log(JSON.stringify(this.project));
    this.onProjectAdded.emit({id: this.project.id,
      name: this.project.name,
      initDate: this.project.initDate,
      endDate: this.project.endDate,
      company: this.project.company});
    this.hideForm();
  }

}
