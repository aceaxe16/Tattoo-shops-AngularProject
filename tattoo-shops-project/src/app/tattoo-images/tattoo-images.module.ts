import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTattooComponent } from './current-tattoo/current-tattoo.component';
import { NewTattooImageComponent } from './new-tattoo-image/new-tattoo-image.component';



@NgModule({
  declarations: [
    CurrentTattooComponent,
    NewTattooImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TattooImagesModule { }
