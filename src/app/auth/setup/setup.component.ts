import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreData, Notification } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  designation = '';
  showNotification = true;
  authStarted = false;
  user: User | null = null;
  hospital = '';
  firestoreData: FirestoreData | null = null;

  notification: Notification = {
    message: 'Complete Setting Up Your Account', length: '', 
    actionable: false, severity: 'green'
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getFirebaseUser().subscribe({
      next: (user) => {
        console.log('user in setup => ', user);
        this.user = user;
        if (user) {
          this.authService.getUserData(user.uid).then(userData => {
            if (userData.exists()) {
              this.firestoreData = userData.data() as FirestoreData;
              this.designation = this.firestoreData.designation;
              this.hospital = this.firestoreData.hospital;
            }
          });
        }
      }
    });
  }

  async createUserData() {
    if (this.authService.user) {
      this.authStarted = true;
      const userData: FirestoreData = this.firestoreData as FirestoreData;

      userData.designation = this.designation;
      userData.hospital = this.hospital;

      try {
        this.notification = {
          message: "Profile Updated successfully",
          length: "long",
          severity: "green",
          actionable: false
        }

        this.showNotification = await this.authService.createUserData(userData);

        this.authService.navigateToLastUrl();
      } catch (error) {
        this.showNotification = true;
        this.notification = {
          message: "An error occurred",
          length: "long",
          severity: "red",
          actionable: false
        }
      }
    }
  }

  dismissNotification(status: boolean) {
    this.showNotification = status;
  }
}
