import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ListComponent } from './list/list.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule, MatInputModule
  ], 
  exports:[ListComponent]
})
export class ProductModule { }
