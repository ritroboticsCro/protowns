import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTopNavigationComponent } from './customer-top-navigation.component';

describe('CustomerTopNavigationComponent', () => {
  let component: CustomerTopNavigationComponent;
  let fixture: ComponentFixture<CustomerTopNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTopNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
