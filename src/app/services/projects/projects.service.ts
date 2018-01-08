import { Injectable } from '@angular/core';

import { Project } from '../../models/project';
import { Company } from '../../models/company';
import { Http } from '@angular/http';

@Injectable()
export class ProjectsService {

  result: any;
  
  constructor(private httpService: Http) { }
  
  getProjects() {
    return this.httpService.get('/api/projects')
      .map((result) => this.result = result.json().data);
  }
  
  addProject(project: Project) {
    return this.httpService.post('/api/projects', project)
      .map((result) => this.result = result.json());
  }

  editProject(project: Project) {
    return this.httpService.put('api/projects/' + project._id, project)
      .map((result) => this.result = result.json());
  }

  deleteProject(projectId: number) {
    return this.httpService.delete('/api/projects/' + projectId)
      .map((result) => this.result = result.json().status);
  }

}
