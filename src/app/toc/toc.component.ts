import { Component, OnInit, Input } from '@angular/core';
import { TableOfContent } from '../types/handbook_types';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit {
  @Input() toc: Array<TableOfContent> = [];
  tocLinks: TableOfContent[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tocLinks = this.toc.map(item => {
      item = Object.create(item);
      item.title = item.title.replace(/[^\w\s]/g, '').replace(/\s/g, "-").toLowerCase();
      item.sections = item.sections
      .map(sectionTitle => sectionTitle.replace(/[^\w\s]/g, '').replace(/\s/g, "-").toLowerCase());

      return item;
    });
  }

}
