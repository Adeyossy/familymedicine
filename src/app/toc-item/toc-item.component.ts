import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toc-item',
  templateUrl: './toc-item.component.html',
  styleUrls: ['./toc-item.component.css']
})
export class TocItemComponent implements OnInit {
  @Input() tocItem: Array<string | string[]> = [];
  @Input() tocItemIndex: number = 0;
  subheadings: string[] = this.tocItem[1] as string[];
  subheading_numbering = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.',
    'VIII.', 'IX.', 'X.', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];

  constructor() { }

  ngOnInit(): void {
    this.subheadings = this.tocItem[1] as string[];
  }

}
