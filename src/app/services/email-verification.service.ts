import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {

  constructor(private authService: AuthService) {}

  verify() {
    this.authService.verifyEmail().subscribe({
      next: (res) => {
        if (res.statusCode === 200) {
          // Verification Email has been sent
        } else {
          // An error occurred with verification
        }
      },
      error: (err) => {
        // An error occurred while trying to verify
      }
    })
  }
}
