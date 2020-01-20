import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 6000, noPause: false, showIndicators: true } }
  ]
})
export class HomeComponent {
  title = 'item';
  isCollapsed = true;
}
