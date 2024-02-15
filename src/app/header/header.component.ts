import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;


  ngOnInit(): void {
/*     this.fadeHeader(); */

  }

  toggleButton() {
      if (!this.menuOpen) {
        this.menuOpen = true;
      } else {
        this.menuOpen = false;
      }
  }

/*   fadeHeader() {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout( () => {
        document.getElementById('header')?.classList.add('active');
      }, 300)
    } )
  } */

}

