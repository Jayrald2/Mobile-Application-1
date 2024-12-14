import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private menuController: MenuController, private router: Router) {}

  // Open the menu programmatically when needed
  openMenu() {
    this.menuController.open();
  }

  // Close the menu programmatically if needed
  closeMenu() {
    this.menuController.close();
  }
}
