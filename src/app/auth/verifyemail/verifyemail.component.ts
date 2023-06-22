import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { User, getAuth, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Notification } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
  user: User | null = null;
  processStarted = false;
  showNotification = true;
  
  notification: Notification = {
    message: "Verify your email", length: 'long', actionable: false, severity: 'green'
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.fetchFirebaseConfig().subscribe({
      next: config => {
        onAuthStateChanged(getAuth(initializeApp(config)), user => {
          this.user = user;
        })
      }
    })
  }

  verifyEmail() {
    try {
      sendEmailVerification(this.user as User, {
        url: `https://familymedicineuch.ng${this.authService.lastUrl}`
      });
      this.notification.message = 'Email verification sent';
      this.showNotification = true;
    } catch (error) {
      console.log(error);
      this.notification.message = 'Error Occurred';
      this.showNotification = true;
    }
  }
}
