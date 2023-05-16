import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  projects: any;
  editMode = false;
  addMode = false;

  newProject = {
    title: '',
    description: '',
    projectImg: '',
    demoUrl: '',
    repoUrl: '',
  };

  constructor(
    private projectService: ProjectService,
    public authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe(
      (res) => {
        this.projects = res;
      },
      (err) => console.log(err)
    );
  }

  saveProject() {
    this.newProject.projectImg = 'https://picsum.photos/200/300';
    this.projectService.postProject(this.newProject).subscribe(
      (res) => {
        this.getProjects();
        this.addModeToggle();
      },
      (err) => console.log(err)
    );
  }

  deleteProject(id: any) {
    this.projectService.deleteProject(id).subscribe(
      (res) => {
        this.getProjects();
      },
      (err) => console.log(err)
    );
  }

  editModeToggle() {
    this.editMode = !this.editMode;
  }

  addModeToggle() {
    this.addMode = !this.addMode;
  }
}
