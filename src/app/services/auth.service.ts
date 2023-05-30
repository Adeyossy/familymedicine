import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@netlify/functions/dist/function/response';
import { Observable } from 'rxjs';
import { UserDetails } from '../types/handbook_types';
import { Auth, User, getAuth, initializeAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  config: FirebaseOptions = {}
  backend_url = "/.netlify/functions";
  firebaseApp: FirebaseApp | null = null;
  firebaseAuth: Auth | null = null;
  isSignedIn = false;
  user: User | null = null

  constructor(private httpClient: HttpClient) {
    this.fetchFirebaseConfig().subscribe({
      next: (config) => {
        console.log("config fetched => ", config);
        this.firebaseApp = initializeApp(config);
        this.firebaseAuth = getAuth(this.firebaseApp);
        
        onAuthStateChanged(this.firebaseAuth, (user) => {
          console.log("user => ", user);
          this.user = user
        });
      },
      error: (err) => {
        console.log("error fetching config => ", err);
      }
    });

  }

  fetchFirebaseConfig(): Observable<FirebaseOptions> {
    return this.httpClient.get<FirebaseOptions>(`${this.backend_url}/index`);
  }

  setFirebaseConfig(config: FirebaseOptions) {
    this.config = config;
  }

  getFirebaseConfig() {
    return this.config;
  }

  getFirebaseAuth() {
    return this.firebaseAuth;
  }

  signup(email: string, password: string): Observable<User> {
    const body = { email, password}
    return this.httpClient.post<User>(`${this.backend_url}/signup`, body);
  }

  login(email: string, password: string) {
    const body = { email, password };
    return this.httpClient.post<string>(`${this.backend_url}/login`, body);
  }

  verifyEmail(body: {user: User}) {
    return this.httpClient.post<Response>(`${this.backend_url}/verify`, body);
  }
}
