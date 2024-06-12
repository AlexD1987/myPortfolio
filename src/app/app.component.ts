import { Component, ViewChild, OnInit } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.translate.use('en');
  }

  @ViewChild(MainPageComponent)
  mainPage!: MainPageComponent;

  handleMessageEvent() {
    this.mainPage.getMessage();
  }
}

