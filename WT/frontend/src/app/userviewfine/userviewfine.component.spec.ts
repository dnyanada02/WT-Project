import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewfineComponent } from './userviewfine.component';

describe('UserviewfineComponent', () => {
  let component: UserviewfineComponent;
  let fixture: ComponentFixture<UserviewfineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewfineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewfineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
