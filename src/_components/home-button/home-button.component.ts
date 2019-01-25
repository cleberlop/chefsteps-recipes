import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
@Component({
  selector: 'home-button-component',
  templateUrl: 'home-button.component.html'
})
export class HomeButtonComponent {
  public homePage: any;
  constructor(public navCtrl: NavController) {
    this.homePage = HomePage;
  }

  goToPage(page: any): void {
    this.navCtrl.push(page, {}, { duration: 1 });
  }
}
