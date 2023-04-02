import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { handbook } from '../data/handbook';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  index: any = -1;
  item: any = {};
  routeSubscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params: ParamMap) => {
        console.log("paramMap => ", params.get('id'));
        this.index = parseInt(params.get('id') as string);
        this.item = handbook[this.index];
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
