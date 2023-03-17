import { NgTemplateOutlet } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { Component, Input, TemplateRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  standalone:true,
  imports : [MaterialModule, NgTemplateOutlet],
  template:`
  <ng-container [ngTemplateOutlet]="dynamicSpinner || defaultWidgetContent"></ng-container>
   <ng-template #defaultWidgetContent>
  <div class="spinner">
    <mat-progress-spinner
    class="example-margin"
    [color]="color"
    [mode]="mode"
    [value]="value"
    >
    </mat-progress-spinner>
  </div>
</ng-template>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  @Input() dynamicSpinner!:TemplateRef<any>;

}
