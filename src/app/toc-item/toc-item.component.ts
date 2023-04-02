import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableOfContent } from '../types/handbook_types';

@Component({
  selector: 'app-toc-item',
  templateUrl: './toc-item.component.html',
  styleUrls: ['./toc-item.component.css']
})
export class TocItemComponent implements OnInit {
  @Input() tocItem: TableOfContent = { title: "", sections: [] };
  @Input() tocItemIndex: number = 0;
  @Input() tocLink: TableOfContent = { title: "", sections: [] };
  @Input() isSelected: boolean = false;
  @Input() isOpen: boolean = false;
  @Output() propagateStateChange: EventEmitter<number> = new EventEmitter();

  subheadings: string[] = this.tocItem.sections;
  subheading_numbering = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.',
    'VIII.', 'IX.', 'X.', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];

  constructor() { }

  ngOnInit(): void {
    this.subheadings = this.tocItem.sections;
  }

  changeSelectionState(): void {
    this.propagateStateChange.emit(this.tocItemIndex)
  }

}
