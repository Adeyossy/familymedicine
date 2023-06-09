import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  slideshow_image = `url(../../../assets/residents/cover.png`;

  resident_image = '';

  residents_images = ['children_area.jpg', 'consulting.jpg', 'entrance.jpg', 'lab.jpg',
    'nurses_station.jpg', 'residents_consulting.jpg', 'sorting_hall_2.jpg'];
  
  constructor() { }

  ngOnInit(): void {
    const index = Math.round(Math.random() * (this.residents_images.length - 1));
    this.resident_image = `url(../../../assets/residents/` + this.residents_images[index];
  }

}
