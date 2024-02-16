import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() menuOpenChange = new EventEmitter<boolean>();
  @ViewChild(MainPageComponent)
  mainPageComponent!: MainPageComponent;
  menuOpen: boolean = false;

  ngOnInit(): void {

  }

  toggleButton() {
    if (!this.menuOpen) {
      this.menuOpen = true;
      this.sendMessage();
    } else {
      this.menuOpen = false;
      this.sendMessage();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuOpenChange.emit(this.menuOpen);
  }

  sendMessage() {
    this.mainPageComponent.getMessage();
  }
}

