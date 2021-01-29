import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [ButtonComponent, LoaderComponent,],
  imports: [CommonModule],
  exports: [ButtonComponent,LoaderComponent]
})
export class SharedModule { }
