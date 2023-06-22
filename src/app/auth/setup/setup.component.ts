import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.fetchFirebaseConfig().subscribe({
      next: (config) => {
        onAuthStateChanged(getAuth(initializeApp(config)), (user) => {
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
        });
      }
    });
  }

  async createUserData() {
    if (this.user) {
      this.authStarted = true;
      let userData: FirestoreData = this.firestoreData as FirestoreData;

      if (!userData) {
        userData = {
          hasPaid: false,
          hospital: this.hospital,
          designation: this.designation,
          paidAbstracts: [],
          handbookPayment: {},
          levelOfAccess: 1,
          userId: this.user.uid
        } 
      } else {
        if (userData.hasOwnProperty('designation')) userData.designation = this.designation;
        if (userData.hasOwnProperty('hospital')) userData.hospital = this.hospital;
      }

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
