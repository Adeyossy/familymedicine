import { Component, OnInit } from '@angular/core';
import { SectionItem } from '../types/handbook_types';

@Component({
  selector: 'app-metatype',
  templateUrl: './metatype.component.html',
  styleUrls: ['./metatype.component.css']
})
export class MetatypeComponent implements OnInit {

  metatype: string = "";
  item: SectionItem = { metatype: "", content: [] };

  constructor() { }

  ngOnInit(): void {
  }

}
