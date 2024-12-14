import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
@NgModule({
  declarations: [MenuComponent, TestComponentComponent], // Declare MenuComponent
  imports: [CommonModule, IonicModule, RouterModule,], // Import necessary modules
  exports: [MenuComponent, TestComponentComponent],
})
export class ComponentsModule{

 }
