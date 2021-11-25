import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceloginComponent } from './policelogin.component';

describe('PoliceloginComponent', () => {
  let component: PoliceloginComponent;
  let fixture: ComponentFixture<PoliceloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
