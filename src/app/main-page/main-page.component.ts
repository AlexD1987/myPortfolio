import { Component, OnInit } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  ngOnInit(): void {
    mainPageSlideIn()
  }

}
function mainPageSlideIn() {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout( () => {

    }, 800)
  } )
}

