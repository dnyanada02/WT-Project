import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavaldarprofileComponent } from './havaldarprofile.component';

describe('HavaldarprofileComponent', () => {
  let component: HavaldarprofileComponent;
  let fixture: ComponentFixture<HavaldarprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavaldarprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavaldarprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
