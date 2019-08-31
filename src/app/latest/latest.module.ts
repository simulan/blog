import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestOverviewComponent } from './latest-overview/latest-overview.component';
import { Routes, RouterModule } from '@angular/router';
import { LatestPostComponent } from './latest-post/latest-post.component';

const routes: Routes = [
  {
    path: 'latest', component: LatestOverviewComponent, children: [
    ]
  },
];

@NgModule({
  declarations: [LatestOverviewComponent, LatestPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LatestModule { }
