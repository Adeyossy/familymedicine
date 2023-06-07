import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, EventEmitter, Output } from '@angular/core';
import { Notification } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, DoCheck {
  @Input() notification: Notification = { 
    message: '', length: '', actionable: false, severity: 'green' 
  };
  
  @Input() show: boolean = false;
  @Output() showEmitter = new EventEmitter();

  timeout = setTimeout(() => {});

  constructor() { }

  ngDoCheck(): void {
    if (this.show) {
      this.timeout = setTimeout(() => {
        this.dismiss();
      }, 5000);
    }
  }

  ngOnInit(): void {
  }

  dismiss(): void {
    this.show = false;
    this.showEmitter.emit(this.show);
  }

  onDismiss(): void {
    clearTimeout(this.timeout);
    this.dismiss();
  }

}
