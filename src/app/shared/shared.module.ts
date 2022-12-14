import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ShortenPipe } from './pipes/shorten.pipe';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ShortenPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe
  ]
  
})
export class SharedModule { }
