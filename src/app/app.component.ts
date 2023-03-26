import { Component, OnInit } from '@angular/core';
import { handbook } from './data/handbook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableOfContent: Array<Array<string | string[]>> = [];
  
  ngOnInit(): void {
    this.tableOfContent = handbook.map(item => {
      let subheadings: string[] = [];
      if(item.content) {
        let content = item.content;
        let content_with_subheadings = content.filter((sub) => sub.metatype === 'subheading');
        subheadings = content_with_subheadings.map(sub => {
          if(Array.isArray(sub.items)) return '';
          return sub.items.subheading;
        });
      }
      return [item.heading, subheadings];
    });
  }
}
