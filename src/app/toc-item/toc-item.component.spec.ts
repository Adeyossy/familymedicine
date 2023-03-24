import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocItemComponent } from './toc-item.component';

describe('TocItemComponent', () => {
  let component: TocItemComponent;
  let fixture: ComponentFixture<TocItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TocItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TocItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
