import { Component, OnInit, Input } from '@angular/core';
import { TableOfContent } from '../types/handbook_types';

@Component({
  selector: 'app-toc-item',
  templateUrl: './toc-item.component.html',
  styleUrls: ['./toc-item.component.css']
})
export class TocItemComponent implements OnInit {
  @Input() tocItem: TableOfContent = { title: "", sections: [] };
  @Input() tocItemIndex: number = 0;
  subheadings: string[] = this.tocItem.sections;
  subheading_numbering = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.',
    'VIII.', 'IX.', 'X.', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];

  constructor() { }

  ngOnInit(): void {
    this.subheadings = this.tocItem.sections;
  }

}
