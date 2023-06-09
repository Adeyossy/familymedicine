import { Component, OnInit } from '@angular/core';
import { FirebaseOptions } from 'firebase/app';
import { Auth, AuthError, User, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Notification } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  showNotification = true;
  user: User | null = null

  notification: Notification = {
    message: "Checking if you're already logged in", length: 'long', actionable: false, severity: 'green'
  };

  firebaseConfig: FirebaseOptions = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  async login(): Promise<void> {
    try {
      const user = await this.authService.login(this.email, this.password);
      if (user) {
        this.showNotification = true;
        this.notification = {
          message: "Successfully logged in",
          length: "long",
          severity: "green",
          actionable: false
        }
        this.authService.navigateToLastUrl();
      } else {
        this.notification = {
          message: "Wrong Username or Password",
          length: "long",
          severity: "red",
          actionable: false
        }
        this.showNotification = true;
      }
    } catch (error) {
      console.log(error);
      this.showNotification = true;
      if ((error as AuthError).code === 'auth/wrong-password') {
        this.notification.message = 'Wrong Password';
      } else {
        this.notification.message = 'Wrong Username or Password';
      }
    }

    // const user = userCredentials.user;
  }

  dismissNotification(status: boolean) {
    this.showNotification = status;
  }

}
