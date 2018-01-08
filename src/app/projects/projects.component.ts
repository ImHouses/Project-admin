import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<any>;
  newProject: Project;
  editProject: Project;
  isFormShow: boolean;
  isEditFormShown: boolean;
  showStatus: boolean;
  statusMessage: string;

  constructor(private service: ProjectsService) { 
    this.getProjects();
    this.newProject = new Project();
    this.isFormShow = false;
    this.showStatus = false;
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
    this.service.addProject(project)
      .subscribe((res) => {
        if(res.status == 200) {
          this.getProjects();
        } else {
          this.showStatus = true;
          this.statusMessage = 'Ocurrió un error al guardar el proyecto.';
        }
      });
  }

  private getProjects() {
    this.service.getProjects()
      .subscribe(res => this.projects = res);
  }

  removeProject(project: Project, index: number) {
    if(window.confirm('¿Estás seguro de eliminar el proyecto?')) {
      this.service.deleteProject(project._id)
        .subscribe((res) => {
          if(res == 200) {
            this.projects.splice(index, 1);
          } else {
            this.showStatus = true;
            this.statusMessage = 'Ocurrió un error al eliminar el proyecto.';
          }
        });
    }
  }

  showFormToEdit(project: Project) {
    this.editProject = project;
  }

}
