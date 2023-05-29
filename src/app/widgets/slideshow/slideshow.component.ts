import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  resident_image = '';

  residents_images = ['children_area.jpg', 'consulting.jpeg', 'entrance.jpeg', 'lab.jpeg',
    'nurses_station.jpeg', 'residents_consulting.jpeg', 'sorting_hall_2.jpeg'];
  
  constructor() { }

  ngOnInit(): void {
    const index = Math.round(Math.random() * (this.residents_images.length - 1));
    this.resident_image = `url(../../../assets/residents/` + this.residents_images[index];
  }

}
