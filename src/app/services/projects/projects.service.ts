import { Injectable } from '@angular/core';

import { Project } from '../../models/project';
import { Company } from '../../models/company';

@Injectable()
export class ProjectsService {
  projects: Project[] = [
    { id: 1, name: 'Proyecto 1', initDate: new Date(2017, 1, 1), endDate: new Date(2018, 1, 1), company: new Company(1, 'Company 1', 'Nowhere, CA')}
  ];

  getProjects(): Array<Project> {
    return this.projects;
  }
  
  addProject(project: Project) {
    this.projects.splice(0,0,project);
  }

  constructor() { }

}
