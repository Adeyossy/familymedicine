import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPasswordComponent } from './email-password.component';

describe('EmailPasswordComponent', () => {
  let component: EmailPasswordComponent;
  let fixture: ComponentFixture<EmailPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
