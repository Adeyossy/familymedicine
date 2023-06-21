import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Notification } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstname = '';
  lastname = '';
  showNotification = true;
  authStarted = false;
  user: User | null = null;

  notification: Notification = {
    message: 'Complete Your Profile', length: '', actionable: false, severity: 'green'
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getFirebaseUser().subscribe({
      next: (user) => {
        console.log('user in profile => ', user);
        this.user = user;
        if (user) {
          if (user.displayName) {
            const name = user.displayName.split(' ');
            this.firstname = name[0];
            this.lastname = name[1];
          }
        }
      }
    })
  }

  onNameChange(name: string, isFirst: boolean): void {
    name = name.replace(name[0], name[0].toUpperCase());
    if (isFirst) {
      this.firstname = name;
    } else {
      this.lastname = name;
    }
  }

  async updateProfile(): Promise<void> {
    try {
      this.authStarted = true;
      
      await this.authService
        .updateProfile(this.firstname.concat(' ', this.lastname));
      
      this.notification = {
        message: 'Profile Updated Successfully',
        length: 'long',
        severity: 'green',
        actionable: false
      }
      this.showNotification = true;
      this.authService.navigateToLastUrl();
    } catch (error) {
      throw error;
    }
  }

}
