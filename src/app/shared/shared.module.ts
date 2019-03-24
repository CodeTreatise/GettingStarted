import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './ConvertToSpaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpaces
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    ConvertToSpaces,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
