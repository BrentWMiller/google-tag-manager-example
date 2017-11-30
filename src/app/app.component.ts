import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gtm';
  features: any;

  ngOnInit() {
    this.features = [];
    this.features = [
      {
        'title': 'Sagittis hendrerit eros nibh ut magna',
        'description': 'Hendrerit vitae massa',
        'link': 'Link 1',
        'linkAlt': 'Link 1 Alt',
        'color': '#F44336'
      },
      {
        'title': 'Sed a tristique',
        'description': 'Integer ac sapien vehicula',
        'link': 'Link 2',
        'linkAlt': 'Link 2 Alt',
        'color': '#E91E63'
      },
      {
        'title': 'Sagittis hendrerit eros nibh ut magna',
        'description': 'Donec viverra sem antes.',
        'link': 'Link 3',
        'linkAlt': 'Link 3 Alt',
        'color': '#9C27B0'
      },
      {
        'title': 'Donec viverra sem ante, sit amet congue quis.',
        'description': 'Pellentesque tempor enim',
        'link': 'Link 4',
        'linkAlt': 'Link 4 Alt',
        'color': '#FF1744'
      },
      {
        'title': 'Integer ac sapien vehicula',
        'description': 'Phasellus eu mi nibh tempor enim.',
        'link': 'Link 5',
        'linkAlt': 'Link 5 Alt',
        'color': '#F50057'
      },
      {
        'title': 'Sit amet fermentum libero',
        'description': 'Donec viverra sem ante, sit amet.',
        'link': 'Link 6',
        'linkAlt': 'Link 6 Alt',
        'color': '#D500F9'
      }
    ];
  }
}
