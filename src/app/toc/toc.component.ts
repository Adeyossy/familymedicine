import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit {
  @Input() toc: Array<Array<string | string[]>> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
