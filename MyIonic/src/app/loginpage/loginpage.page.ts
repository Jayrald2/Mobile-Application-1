import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})

export class LoginpagePage{

  user: User;
  private staticUsername = 'admin@gmail.com';
  private staticPassword = 'password123';

  constructor(private alertController: AlertController) {
    // Initialize the user with default values
    this.user = new User('', '', '');
  }


  onSubmit() {
    if(this.user.username === this.staticUsername && this.staticPassword === this.staticPassword){
      console.log("Email: ", this.user.username);
      console.log("Password: ", this.user.password);
    }

    // Show alert or any other logic
    this.showAlert();
  }
  async showAlert() {
    // Validate the username and password
    if (this.user.username === this.staticUsername && this.user.password === this.staticPassword) {
      const alert = await this.alertController.create({
        header: 'Login Successful',
        message: `Welcome, ${this.user.username}!`,
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Incorrect username or password. Please try again.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
