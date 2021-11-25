import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficrulesComponent } from './trafficrules.component';

describe('TrafficrulesComponent', () => {
  let component: TrafficrulesComponent;
  let fixture: ComponentFixture<TrafficrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficrulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
