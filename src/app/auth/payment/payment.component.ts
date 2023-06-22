import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreData, Notification, PaystackResponse } from 'src/app/types/handbook_types';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cardname = '';
  cardnumber = '';
  processStarted = false;
  showNotification = true;
  expiry = '';
  cvv = 0;
  email = '';
  userId = '';
  routeSub = new Subscription();
  reference = '';
  userData: FirestoreData | null = null;

  notification: Notification = {
    message: "Make payment for the handbook", length: 'long', actionable: false, severity: 'green'
  };

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.routeSub = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        // this.email = params.get('email') as string;
        // this.userId = params.get('userId') as string;
        this.reference = params['reference'] as string;
        console.log('reference => ', this.reference);
        if (this.reference) {
          this.verifyPayment();
        }
      },
      error: (error) => {
        console.log("error fetching params => ", error);
      }
    });

    // this.activatedRoute.p/
  }

  ngOnInit(): void {
    this.authService.fetchFirebaseConfig().subscribe({
      next: (config) => {
        onAuthStateChanged(getAuth(initializeApp(config)), (user) => {
          if (user) {
            this.email = user.email as string;
            this.userId = user.uid as string;
            this.authService.getUserData(user.uid).then((userData) => {
              if (userData.exists()) {
                this.userData = userData.data() as FirestoreData;
              } else {
                //
              }
            });
          }
        })
      }
    })
  }

  verifyPayment() {
    // Check the verify endpoint with the transaction reference
    // Wait for the response
    // If successful, store the details that we want
    this.authService.verifyPayment(this.reference).subscribe({
      next: (response) => {
        console.log('response from server');
        console.log(response);
        
      },
      error: (err) => {
        console.log('error occurred');
        console.log(err);
      }
    })
  }

  onPaymentSuccessful() {}

  onNameChange(name: string): void {
    this.cardname = name.split(" ").map(subname => subname
      .replace(subname[0], subname[0].toUpperCase())).join(" ");
  }

  initiatePayment() {
    this.processStarted = true;
    console.log('email => ', this.email);
    console.log('reference => ', )
    const params = {
      email: this.email,
      reference: this.userId + Date.now(),
      amount: 7500 * 100,
      callback_url: `https://familymedicineuch.ng/account/payment/verify`
    }

    this.authService.payWithPaystack(params).subscribe({
      next: (response) => {
        console.log("response received => ", response);
        const paystackResponse = response as PaystackResponse;
        if (paystackResponse.status) {
          this.notification = {
            message: 'Redirecting to Paystack',
            length: 'long',
            actionable: false,
            severity: 'green'
          }

          setTimeout(() => { window.location.href = paystackResponse.data.authorization_url; },
          1000);
        }
      }
    })
  }

  updateCardnumber(cardnumber: string) {
    // this.cardnumber = cardnumber.substring(0, 4);
    cardnumber = cardnumber.split(" ").join('');
    console.log('parseInt => ', parseInt(cardnumber));
    console.log(this.cardnumber, ' vs ', cardnumber);
    if (parseInt(cardnumber)) {
      console.log("it passed unexpectedly");
      const substrings: string[] = [];
      if (cardnumber.length > 4) {
        for (let i = 0; i < cardnumber.length; i += 4) {
          substrings.push(cardnumber.substring(i, i + 4));
        }
      } else {
        this.cardnumber = cardnumber;
        return;
      }
      
      this.cardnumber = substrings.join(" ");
    } else {
      this.cardnumber = this.cardnumber;
    }
  }

  onPaymentInit() {
    console.log("payment init");
  }

  onClose() {
    console.log("payment closed unexpectedly");
  }

  callback(paystackObject: object) {
    console.log(paystackObject);
  }

}
