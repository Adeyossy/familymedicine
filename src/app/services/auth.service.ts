import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@netlify/functions/dist/function/response';
import { Observable, of } from 'rxjs';
// import {  } from 'rxjs/operators'
import { FirestoreData, PaystackParams, UserDetails } from '../types/handbook_types';
import { Auth, AuthError, User, createUserWithEmailAndPassword, getAuth, initializeAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore, Firestore, addDoc, collection, doc, setDoc, getDoc, DocumentSnapshot } from 'firebase/firestore';
import { ActivatedRouteSnapshot, Route, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  config: FirebaseOptions = {}
  backend_url = "/.netlify/functions";
  firebaseApp: FirebaseApp | null = null;
  firebaseAuth: Auth | null = null;
  firebaseAuth$ = new Observable<Auth | null>();
  firestore: Firestore | null = null;
  firestoreData: FirestoreData | null = null;
  firestoreData$ = new Observable<FirestoreData | null>();
  isSignedIn = false;
  user: User | null = null;
  user$ = of(this.user);
  lastUrl = '';

  constructor(private httpClient: HttpClient,
    private router: Router) {
    this.fetchFirebaseConfig().subscribe({
      next: (config) => {
        this.config = config;
        this.firebaseApp = initializeApp(config);
        this.firebaseAuth = getAuth(this.firebaseApp);
        this.firebaseAuth$ = of(this.firebaseAuth);
        this.firestore = getFirestore(this.firebaseApp);
        this.user$ = of(this.firebaseAuth.currentUser);

        onAuthStateChanged(this.firebaseAuth, (user) => {
          // console.log(user);
          this.user = user;
          this.user$ = of(user);
          if (user) {
            this.getUserData(user.uid).then((userData) => {
              if (userData.exists()) {
                this.firestoreData = userData.data() as FirestoreData;
                this.firestoreData$ = of(this.firestoreData);
              }
            });
          }
          router.navigateByUrl(this.lastUrl);
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
    return this.firebaseAuth$;
  }

  getFirebaseUser(): Observable<User | null> {
    return this.user$;
  }

  getFirestoreData(): Observable<FirestoreData | null> {
    return this.firestoreData$;
  }

  signup(email: string, password: string): Observable<User> {
    const body = { email, password }
    return this.httpClient.post<User>(`${this.backend_url}/signup`, body);
  }

  // login(email: string, password: string) {
  //   const body = { email, password };
  //   return this.httpClient.post<string>(`${this.backend_url}/login`, body);
  // }

  verifyEmail(body: { user: User }) {
    return this.httpClient.post<Response>(`${this.backend_url}/verify`, body);
  }

  async getUserData(userId: string): Promise<DocumentSnapshot> {
    const docRef = doc(this.firestore as Firestore, 'users', userId);
    try {
      const userDoc = await getDoc(docRef);
      return userDoc;
    } catch (error) {
      throw error;
    }
  }

  async checkUserExists(userId: string): Promise<boolean> {
    try {
      const userDoc = await this.getUserData(userId);
      return userDoc.exists();
    } catch (error) {
      throw error;
    }
  }

  async completeRegistration(user: User): Promise<boolean | UrlTree> {
    try {
      const userDoc = await this.getUserData(user.uid);
      if (userDoc.exists()) {
        // const missingInfo: string[] = [];
        const userData = userDoc.data() as FirestoreData;
        if (!userData.hospital || !userData.designation) {
          return this.router.parseUrl('/account/setup');
        }

        if (!userData.hasPaid) {
          return this.router.parseUrl(`/account/payment`);
        }
        // return urlTree for payment
        return true;
        // return this.router.parseUrl(`/account/payment/${user.uid}/${user.email}`);
      } else {
        // return urlTree for account creation
        return this.router.parseUrl('/account/setup');
      }
    } catch (error) {
      throw error;
    }
  }

  async createUserData(data: FirestoreData): Promise<boolean> {
    // do firestore stuff
    // const usersRef = collection(this.firestore as Firestore, 'users');
    const docRef = doc(this.firestore as Firestore, 'users', data.userId);
    try {
      await setDoc(docRef, data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async createAccount(email: string, password: string,
    displayName: string): Promise<User> {
    console.log("config => ", this.config);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.firebaseAuth as Auth, email, password);

      this.user = userCredential.user;
      await updateProfile(userCredential.user, { displayName: displayName });

      return userCredential.user;

    } catch (error) {
      // const authError = error as AuthError;
      throw error;
      // return authError.code;
    }
  }

  async updateProfile(displayName: string): Promise<boolean> {
    try {
      await updateProfile(this.user as User, { displayName: displayName });
      return true;
    } catch (error) {
      throw error;
    }
  }

  setLastUrl(lastUrl: string): void {
    this.lastUrl = lastUrl;
  }

  navigateToLastUrl(): void {
    this.router.navigateByUrl(this.lastUrl);
  }

  verifyPayment(reference: string): Observable<any> {
    return this.httpClient.post(`${this.backend_url}/verifypayment`, {reference: reference});
  }

  payWithPaystack(params: PaystackParams): Observable<object> {
    // params['callback_url'] = this.lastUrl;
    return this.httpClient.post(`${this.backend_url}/pay`, params);
  }
}
