import { Component, OnInit } from '@angular/core';
import { FirebaseOptions } from 'firebase/app';
import { Auth, AuthError, User, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Notification, UserDetails } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = '';
  password = '';
  repeatPassword = '';
  firstname = '';
  lastname = '';
  showNotification = true;
  authStarted = false;
  user: User | null = null;

  notification: Notification = {
    message: 'Create Your Account', length: '', actionable: false, severity: 'green'
  };

  firebaseConfig: FirebaseOptions = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async createAccount(): Promise<void> {
    this.authStarted = true;
    try {
      const user = await this.authService.createAccount(this.email.trim(), this.password,
        this.firstname.trim() + " " + this.lastname.trim());

      if (user) {
        this.notification.message = 'Account created successfully'
        this.showNotification = true;

        try {
          const outcome = await this.authService.createUserData(
            {
              hasPaid: false,
              handbookPayment: {},
              paidAbstracts: [],
              levelOfAccess: 1,
              userId: user.uid,
              hospital: '',
              designation: ''
            }
          );

          if (outcome) {
            this.notification.message = 'Onboarding successful';
            this.showNotification = true;

            this.authStarted = false;
          }
        } catch (error) {
          throw error;
        }

      }
    } catch (error) {
      const authError = error as AuthError;

      if (authError.code === 'auth/email-already-exists') {
        this.notification.message = "Sorry, this email already exists";
        this.showNotification = true;
      }

      if (authError.code === 'auth/invalid-email') {
        this.notification.message = "Sorry, your email is invalid";
        this.showNotification = true;
      }

      this.notification.message = "Sorry, an error occurred";
      this.showNotification = true;
    }
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  setRepeatPassword(repeatPassword: string): void {
    this.repeatPassword = repeatPassword;
  }

  onNameChange(name: string, isFirst: boolean): void {
    name = name.replace(name[0], name[0].toUpperCase());
    if (isFirst) {
      this.firstname = name;
    } else {
      this.lastname = name;
    }
  }

  dismissNotification(status: boolean) {
    this.showNotification = status;
  }

  // setNotification()
}
