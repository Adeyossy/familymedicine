import { Component, Input, OnInit } from '@angular/core';
import { Notification } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input() notification: Notification = { 
    message: '', length: '', actionable: false, severity: 'green' 
  };
  
  @Input() show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
