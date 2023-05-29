import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-email-password',
  templateUrl: './email-password.component.html',
  styleUrls: ['./email-password.component.css']
})
export class EmailPasswordComponent implements OnInit {

  @Input() email = '';
  @Output() emailEmitter = new EventEmitter();

  @Input() password = '';
  @Output() passwordEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEmail(email: string) {
    this.emailEmitter.emit(email.trim());
  }

  emitPassword(password: string) {
    this.passwordEmitter.emit(password.trim());
  }

}
