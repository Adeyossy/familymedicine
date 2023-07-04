import { Component, OnInit } from '@angular/core';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Observable, concatMap, from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Notification } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  showNotification = false;
  notification: Notification = {
    message: '',
    length: 'short',
    severity: 'green',
    actionable: false
  }

  email = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  resetPassword(): void {
    this.authService.getFirebaseAuth().pipe(
      concatMap(auth => from(sendPasswordResetEmail(auth, this.email.trim(), {
        url: 'https://familymedicineuch.ng/account/login'
      })))
    ).subscribe({
      next: (code) => {
        this.notification.message = "Check your email for the reset link";
        this.showNotification = true;
      },
      error: (error) => {
        console.log('error => ', error);
        this.notification.message = "Apologies! An Error Occurred";
        this.showNotification = true;
      }
    });
  }
}
