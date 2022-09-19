import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ShortenPipe } from './pipes/shorten.pipe';




@NgModule({
  declarations: [
    ShortenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    ShortenPipe
  ]
  
})
export class SharedModule { }
