import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { ButtonComponent } from './button/button.component';
import { FabComponent } from './fab/fab.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    LineComponent,
    SeperatorComponent,
    ButtonComponent,
    FabComponent,
    TooltipDirective
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
