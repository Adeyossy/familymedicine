import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  images = ["abodunde.jpg", "achiaka.jpg", "adetunji.jpg", "adigun.jpg", "awoonidanla.jpg",
            "ayeni.jpg", "mosuro.jpg", "muyibi.jpg", "ogunbode.jpg", "olalemi.jpg", 
            "olawuyi.jpg", "salam.jpg", "solanke.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
