import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetails } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = '';
  password = '';
  repeatPassword = '';
  notification = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signup(): void {
    this.authService.signup(this.email, this.password).subscribe({
      next: (response) => {
        
        if (response) {
          const user = response;
          // const user = resBody['user'] as UserDetails;

          if (user.emailVerified) {
            // Proceed to app
            this.notification = 'user email has been verified'
          } else {
            this.authService.verifyEmail({user}).subscribe({
              next: (res) => {
                if (res.statusCode === 200) {
                  // Verification Email has been sent
                  this.notification = 'Verification Email has been sent';
                } else {
                  // An error occurred with verification
                  this.notification = 'An error occurred with verification';
                }
              },
              error: (err) => {
                // An error occurred while trying to verify
                console.log(`An error occurred with verification`);
                console.log(err);
                this.notification = `An error occurred with verification: ${err}`;
              }
            });
          }
        }
      },
      error: (err) => {
        console.log("error => ", err);
      },
      complete: () => {
        console.log("completed");
      }
    });
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

}
