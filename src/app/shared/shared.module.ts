import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { ButtonComponent } from './button/button.component';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations: [
    LineComponent,
    SeperatorComponent,
    ButtonComponent,
    FabComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LineComponent,
    SeperatorComponent,
    ButtonComponent,
    FabComponent
  ]
})
export class SharedModule { }
