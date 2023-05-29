import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@netlify/functions/dist/function/response';
import { Observable } from 'rxjs';
import { UserDetails } from '../types/handbook_types';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  backend_url = "/.netlify/functions";

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
