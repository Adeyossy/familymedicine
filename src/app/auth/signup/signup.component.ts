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
  showNotification = false;
  user: User | null = null

  notification: Notification = { 
    message: '', length: '', actionable: false, severity: 'green' 
  };

  firebaseConfig: FirebaseOptions = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async createAccount(): Promise<void> {
    console.log("config => ", this.authService.getFirebaseConfig());
    
    try {
      const userCredential = await createUserWithEmailAndPassword(this.authService
        .getFirebaseAuth() as Auth, this.email, this.password)
      
      this.user = userCredential.user;
      this.showNotification = true;
      this.notification = {
        message: 'Account created successfully',
        length: 'short',
        actionable: false,
        severity: 'green'
      }

    } catch(error) {
      const authError = error as AuthError;
      if (authError.code === 'auth/email-already-exists') {
        this.showNotification = true;
        this.notification = {
          message: "Sorry, this email already exists",
          length: "long",
          actionable: false,
          severity: "yellow"
        }
      }

      if (authError.code === 'auth/invalid-email') {
        this.showNotification = true;
        this.notification = {
          message: "Sorry, your email is invalid",
          length: "long",
          actionable: false,
          severity: "red"
        }
      }
    }
  }

  // signup(): void {
  //   this.authService.signup(this.email, this.password).subscribe({
  //     next: (response) => {
        
  //       if (response) {
  //         const user = response;
  //         // const user = resBody['user'] as UserDetails;

  //         if (user.emailVerified) {
  //           // Proceed to app
  //           this.notification = 'user email has been verified'
  //         } else {
  //           this.authService.verifyEmail({user}).subscribe({
  //             next: (res) => {
  //               if (res.statusCode === 200) {
  //                 // Verification Email has been sent
  //                 this.notification = 'Verification Email has been sent';
  //               } else {
  //                 // An error occurred with verification
  //                 this.notification = 'An error occurred with verification';
  //               }
  //             },
  //             error: (err) => {
  //               // An error occurred while trying to verify
  //               console.log(`An error occurred with verification`);
  //               console.log(err);
  //               this.notification = `An error occurred with verification: ${err}`;
  //             }
  //           });
  //         }
  //       }
  //     },
  //     error: (err) => {
  //       console.log("error => ", err);
  //     },
  //     complete: () => {
  //       console.log("completed");
  //     }
  //   });
  // }

  setEmail(email: string): void {
    this.email = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  // setNotification()
}
