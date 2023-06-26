import { Component, OnInit, Input, DoCheck, EventEmitter, Output } from '@angular/core';
import { TableOfContent } from '../types/handbook_types';
import { Observable } from 'rxjs';
import { Auth, User, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { AuthService } from '../services/auth.service';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit, DoCheck {
  @Input() toc: Array<TableOfContent> = [];
  @Input() navIndex: number = -1;
  @Input() itemsSelectionState: boolean[] = [];
  @Input() itemsOpenState: boolean[] = [];
  tocLinks: TableOfContent[] = [];
  @Output() propagateIndex = new EventEmitter();
  user: User | null = null;
  user$ = new Observable<User | null>();

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getFirebaseUser();
  }

  ngOnInit(): void {
    this.tocLinks = this.toc.map(item => {
      item = Object.create(item);
      item.title = item.title.replace(/[^\w\s]/g, '').replace(/\s/g, "-").toLowerCase();
      item.sections = item.sections
        .map(sectionTitle => sectionTitle.replace(/[^\w\s]/g, '').replace(/\s/g, "-").toLowerCase());

      return item;
    });

    this.authService.fetchFirebaseConfig().subscribe({
      next: (config) => {
        onAuthStateChanged(getAuth(initializeApp(config)), (user) => {
          this.user = user;
        });
      },
      error: (err) => {
        console.log('error');
        console.log(err);
      }
    });
  }

  ngDoCheck(): void {
  }

  changeState(index: number): void {
    this.propagateIndex.emit(index);
  }

  logout() {
    if (this.user) {
      signOut(getAuth()).then(() => {
        console.log('signed out');
        this.authService.navigateToLastUrl();
      });
    }
  }

}
