import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project>;
  service: ProjectsService;
  newProject: Project;
  editProject: Project;
  isFormShow: boolean;
  isEditFormShown: boolean;

  constructor(service: ProjectsService) { 
    this.projects = service.getProjects();
    this.newProject = new Project();
    this.isFormShow = false;
    this.isEditFormShown = false;
  }
  
  ngOnInit() {
  }

  showForm() {
    this.isFormShow = true;
  }
  
  onFormHidden(hidden: boolean) {
    this.isFormShow = hidden;
    this.isEditFormShown = hidden;
  }

  showEditProjectForm() {
    this.isEditFormShown = true;
  }

  onProjectAdded(project: Project) {
    this.projects.splice(0,0,project);
    /* Then we add it to the DB. */
  }

  removeProject(project: Project, index: number) {
    if(window.confirm('¿Estás seguro de eliminar el proyecto?')) {
      this.projects.splice(index, 1);
      /* Then we delete it from the DB. */
    }
  }

  showFormToEdit(project: Project) {
    this.editProject = project;
  }

}
