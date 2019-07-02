import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonArray: Array<Button> = [
    {
      text: 'begin',
      url: '/1'
    }
  ];

  buttonText: string;
  buttonLink: string;
  showButton: boolean;
  constructor() {
    this.buttonText = this.buttonArray[0].text;
    this.buttonLink = this.buttonArray[0].url;
    this.showButton = true;
  }

  click() {
    this.showButton = false;
  }
}

export class Button {
  text: string;
  url: string;
}
