import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
/*     this.fadeHeader(); */
  }

/*   fadeHeader() {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout( () => {
        document.getElementById('header')?.classList.add('active');
      }, 300)
    } )
  } */
}

