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
      let subheadings = [];
      if(item.content) {
        let content = item.content as any;
        subheadings = content.filter((sub: { metatype: string }) => sub.metatype !== 'subheading')
        .map((sub: { subheading: any; }) => sub.subheading);
      }
      return [item.heading, subheadings];
    });
  }
}
