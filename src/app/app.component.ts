import { Component, ViewChild } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(MainPageComponent)
  mainPage!: MainPageComponent;

  handleMessageEvent() {
    this.mainPage.getMessage();
  }
}

