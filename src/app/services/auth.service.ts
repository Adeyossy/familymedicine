import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  backend_url = "http://localhost:9999/.netlify/functions";

  signup(email: string, password: string) {
    const body = { email, password}
    return this.httpClient.post<string>(`${this.backend_url}/index`, body);
  }
}
