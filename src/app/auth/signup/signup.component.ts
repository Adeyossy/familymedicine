import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signup(): void {
    this.authService.signup(this.email, this.password).subscribe({
      next: (value) => {
        console.log("response => ",value);
      },
      error: (err) => {
        console.log("error => ", err);
      },
      complete: () => {
        console.log("completed");
      }
    })
  }

}
