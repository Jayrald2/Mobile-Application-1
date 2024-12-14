import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent], // Declare MenuComponent
  imports: [CommonModule, IonicModule, RouterModule,], // Import necessary modules
  exports: [MenuComponent],
})
export class ComponentsModule{

 }
