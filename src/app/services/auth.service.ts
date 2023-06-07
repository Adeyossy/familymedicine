import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@netlify/functions/dist/function/response';
import { Observable } from 'rxjs';
import { FirestoreData, UserDetails } from '../types/handbook_types';
import { Auth, AuthError, User, createUserWithEmailAndPassword, getAuth, initializeAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore, Firestore, addDoc, collection, doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  config: FirebaseOptions = {}
  backend_url = "/.netlify/functions";
  firebaseApp: FirebaseApp | null = null;
  firebaseAuth: Auth | null = null;
  firestore: Firestore | null = null;
  isSignedIn = false;
  user: User | null = null

  constructor(private httpClient: HttpClient) {
    this.fetchFirebaseConfig().subscribe({
      next: (config) => {
        this.config = config;
        this.firebaseApp = initializeApp(config);
        this.firebaseAuth = getAuth(this.firebaseApp);
        this.firestore = getFirestore(this.firebaseApp);
        
        onAuthStateChanged(this.firebaseAuth, (user) => {
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

  async login(email: string, password: string): Promise<User> {
    const userCredentials = await signInWithEmailAndPassword(this.firebaseAuth as Auth, 
      email, password);

    this.user = userCredentials.user;

    return userCredentials.user;
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

  // login(email: string, password: string) {
  //   const body = { email, password };
  //   return this.httpClient.post<string>(`${this.backend_url}/login`, body);
  // }

  verifyEmail(body: {user: User}) {
    return this.httpClient.post<Response>(`${this.backend_url}/verify`, body);
  }

  async createUserData(data: FirestoreData): Promise<boolean> {
    // do firestore stuff
    // const usersRef = collection(this.firestore as Firestore, 'users');
    const docRef = doc(this.firestore as Firestore, 'users', data.userId);
    try {
      await setDoc(docRef, data);
      return true;
    } catch (error) {
      console.log('error occurred => ', error);
      return false;
    }
  }

  async createAccount(email: string, password: string, 
    displayName: string): Promise<User> {
    console.log("config => ", this.config);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.firebaseAuth as Auth, email, password);
      
      this.user = userCredential.user;
      await updateProfile(userCredential.user, {displayName: displayName});

      return userCredential.user;

    } catch(error) {
      const authError = error as AuthError;
      throw error;
      // return authError.code;
    }
  }
}
