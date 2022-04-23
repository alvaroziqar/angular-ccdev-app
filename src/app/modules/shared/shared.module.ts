import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const COMMON_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
];

@NgModule({
  imports: [...COMMON_MODULES],
  exports: [...COMMON_MODULES],
  declarations: [],
  providers: [],
})
export class SharedModule {}
