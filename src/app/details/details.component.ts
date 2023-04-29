import { Component, OnInit, OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { handbook } from '../data/handbook';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy, OnChanges {
  index: any = -1;
  item: any = {};
  routeSubscription = new Subscription();
  handbook = handbook;
  @Output() emitIndex: EventEmitter<number> = new EventEmitter();
  @Output('activate') activate: EventEmitter<number> = new EventEmitter();
  // @Output('attach') attach: EventEmitter<number> = new EventEmitter();

  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.routeSubscription = this.route.paramMap.subscribe({
        next: (params: ParamMap) => {
          this.index = parseInt(params.get('id') as string);
          this.item = handbook[this.index];
        },
        complete: () => {
          // this.activate.emit(this.index);
        }
      });
    }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      // this.attach.emit()
  }

  switchSection(index: number): void {
    console.log("function called");
    const link = handbook[index].heading.replace(/[^\w\s]/g, '')
      .replace(/\s/g, "-").toLowerCase();
    this.router.navigateByUrl(`/content/${index}/${link}`);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
