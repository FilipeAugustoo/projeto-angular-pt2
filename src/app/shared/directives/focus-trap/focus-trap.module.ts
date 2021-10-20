import { FocusTrapDirective } from './focus-trap.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule ({
  declarations: [FocusTrapDirective],
  imports: [CommonModule],
  exports: [FocusTrapDirective]
})

export class FocusTrapModule {}
