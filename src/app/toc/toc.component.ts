import { Component, OnInit, Input, DoCheck, EventEmitter, Output } from '@angular/core';
import { TableOfContent } from '../types/handbook_types';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit, DoCheck {
  @Input() toc: Array<TableOfContent> = [];
  @Input() navIndex: number = -1;
  @Input() itemsSelectionState: boolean[] = [];
  @Input() itemsOpenState: boolean[] = [];
  tocLinks: TableOfContent[] = [];
  @Output() propagateIndex = new EventEmitter();

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

  ngDoCheck(): void {
  }

  changeState(index: number): void {
    this.propagateIndex.emit(index);
  }

}
