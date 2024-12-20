import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginpagePageRoutingModule } from './loginpage-routing.module';
import { LoginpagePage } from './loginpage.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpagePageRoutingModule,
    ComponentsModule
  ],
  exports: [LoginpagePage],
  declarations: [LoginpagePage]
})
export class LoginpagePageModule {

}
