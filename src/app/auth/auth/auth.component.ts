import { Component, OnInit } from '@angular/core';
import { FirebaseOptions } from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  firebaseConfig: FirebaseOptions = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
