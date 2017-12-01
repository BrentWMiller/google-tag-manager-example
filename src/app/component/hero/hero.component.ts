import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtm-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  dataObject: any = [];

  constructor() { }

  ngOnInit() {
  }

  public squareClicked(value): void {
    console.log(`square ${value} clicked`);
  }

}
