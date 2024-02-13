import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
      transition('inactive => active', animate('1s ease-in-out')),
      transition('active => inactive', animate('1s ease-in-out'))
    ]),
    trigger('titleTwoAnimation', [
      state('inactive', style({
        transform: 'translateX(-1600px)' // Start position
      })),
      state('active', style({
        transform: 'translateX(0)' // End position
      })),
      transition('inactive => active', animate('1s ease-in-out')),
      transition('active => inactive', animate('1s ease-in-out'))
    ])
  ]
})
export class MainPageComponent implements OnInit {
  titleOneState: string = 'inactive';
  titleTwoState: string = 'inactive';

  ngOnInit(): void {
    setTimeout(() => {
      this.titleOneState = 'active';
    }, 1500);
    setTimeout(() => {
      this.titleTwoState = 'active';
    }, 1500);
  }
}


