import { Component, OnInit, Input } from '@angular/core';
import { TableOfContent } from '../types/handbook_types';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit {
  @Input() toc: Array<TableOfContent> = [];
  itemsSelectionState: boolean[] = [];
  itemsOpenState: boolean[] = [];
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

    this.itemsSelectionState = new Array(this.toc.length);
    this.itemsSelectionState = this.itemsSelectionState.fill(false);
    this.itemsOpenState = Array.from(this.itemsSelectionState);
  }

  changeState(index: number): void {
    const oldState = this.itemsSelectionState[index];
    this.itemsSelectionState = this.itemsSelectionState.fill(false);
    this.itemsOpenState = this.itemsOpenState.fill(false);
    this.itemsSelectionState[index] = !oldState;
    this.itemsOpenState[index] = !oldState;
  }

}
