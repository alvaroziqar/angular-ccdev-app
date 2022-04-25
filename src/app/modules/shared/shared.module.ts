import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { PostFormComponent } from './components/post-form/post-form.component';
import { ControlErrorDirective } from './directives/control-error/control-error.directive';
import { ControlErrorComponent } from './components/control-error-component/control-error-component';
import { LoadingComponent } from './components/loading/loading.component';
import { ToastComponent } from './components/toast/toast.component';

const COMMON_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
];

const COMPONENTS = [
  PostFormComponent,
  ControlErrorComponent,
  LoadingComponent,
  ToastComponent,
];
const DIRECTIVES = [ControlErrorDirective];

@NgModule({
  imports: [...COMMON_MODULES],
  exports: [...COMMON_MODULES, ...COMPONENTS, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  providers: [],
})
export class SharedModule {}
