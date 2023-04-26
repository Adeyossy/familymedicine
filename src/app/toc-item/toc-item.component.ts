import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableOfContent } from '../types/handbook_types';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs'

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
  @Input() navIndex: number = -1;
  @Output() propagateStateChange: EventEmitter<number> = new EventEmitter();

  routeSubscription = new Subscription();

  subheadings: string[] = this.tocItem.sections;
  subheading_numbering = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.',
    'VIII.', 'IX.', 'X.', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // console.log('router.link => ', window.location.href.split('/')[4]);
  }

  changeSelectionState(): void {
    this.propagateStateChange.emit(this.tocItemIndex)
  }

}
