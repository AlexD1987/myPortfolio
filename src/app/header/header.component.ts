import { Component, OnInit, Output, EventEmitter, Directive } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  @Output() sendMessageEvent = new EventEmitter<void>();
  menuOpen: boolean = false;

  ngOnInit(): void {

  }

  toggleButton() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
    this.sendMessage();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  sendMessage() {
    this.sendMessageEvent.emit();
  }
}

