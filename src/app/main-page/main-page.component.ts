import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('titleOneAnimation', [
      state('inactive', style({
        transform: 'translateX(1600px)' // Start position
      })),
      state('active', style({
        transform: 'translateX(0)' // End position
      })),
      transition('inactive => active', animate('1.4s ease-in-out')),
      transition('active => inactive', animate('1.4s ease-in-out'))
    ]),
    trigger('titleTwoAnimation', [
      state('inactive', style({
        transform: 'translateX(-1600px)' // Start position
      })),
      state('active', style({
        transform: 'translateX(0)' // End position
      })),
      transition('inactive => active', animate('1.4s ease-in-out')),
      transition('active => inactive', animate('1.4s ease-in-out'))
    ]),
    trigger('titleNameAnimation', [
      state('inactive', style({
        transform: 'translateY(800px)' // Start position
      })),
      state('active', style({
        transform: 'translateY(0)' // End position
      })),
      transition('inactive => active', animate('2.5s ease-in-out')),
      transition('active => inactive', animate('2.5s ease-in-out'))
    ])
  ]
})


export class MainPageComponent implements OnInit {
  titleOneState: string = 'inactive';
  titleTwoState: string = 'inactive';
  slideBorder: boolean = false;
  nameSlideIn: string = 'inactive';
  startArrow: boolean = false;
  openMenu: boolean = false;

  constructor(private menuBtn: HeaderComponent) {

  }

  ngOnInit(): void {


    setTimeout(() => {
      this.titleOneState = 'active';
    }, 1000);
    setTimeout(() => {
      this.titleTwoState = 'active';
    }, 1000);
    setTimeout(() => {
      this.nameSlideIn = 'active';
    }, 1600);
    setTimeout( () => {
      this.slideBorder = true;
    },4600);
    setTimeout ( () => {
      this.startArrow = true;
    }, 7000);
  }

  handleMenuChange(menuOpen: boolean) {
    this.openMenu = menuOpen;
    console.log('Wert von openMenu geändert:', this.openMenu);
  }

  getMessage() {
    console.log('get message');
  };
}


