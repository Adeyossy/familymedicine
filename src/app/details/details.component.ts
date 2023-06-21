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
  residents_images = ['children_area.jpg', 'consulting.jpg', 'entrance.jpg', 'lab.jpg',
    'nurses_station.jpg', 'residents_consulting.jpg', 'sorting_hall_2.jpg'];
  resident_image: string = ''
  animate = false;
  // @Output('attach') attach: EventEmitter<number> = new EventEmitter();

  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.index = parseInt(params.get('id') as string);
        this.item = handbook[this.index];
        this.animate = true;

        setTimeout(() => {
          this.animate = false;
          this.randomizeImage();
        }, 1000);
      },
      complete: () => {
        // this.activate.emit(this.index);
      }
    });
  }

  ngOnInit(): void {
    this.randomizeImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changedIndex = changes['index'];
    if (changedIndex.previousValue !== changedIndex.currentValue) {
      console.log("there has been a change in the index");
    }
    console.log("any changes at all");
  }

  randomizeImage() {
    const rand = Math.random() * (this.residents_images.length - 1);
    const randInteger = Math.floor(rand);

    this.resident_image = 'url(../../assets/residents/' 
    + this.residents_images[randInteger] + ')';
  }

  getLink(index: number): string {
    return handbook[index].heading.replace(/[^\w\s]/g, '')
      .replace(/\s/g, "-").toLowerCase();
  }

  switchSection(index: number): void {
    const link = handbook[index].heading.replace(/[^\w\s]/g, '')
      .replace(/\s/g, "-").toLowerCase();
    this.router.navigateByUrl(`/content/${index}/${link}`);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
