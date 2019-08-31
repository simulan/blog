import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProjectsOverviewComponent, children: [
    ]
  },

];


@NgModule({
  declarations: [ProjectsOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectModule { }
