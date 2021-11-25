import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavaldarfineComponent } from './havaldarfine.component';

describe('HavaldarfineComponent', () => {
  let component: HavaldarfineComponent;
  let fixture: ComponentFixture<HavaldarfineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavaldarfineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavaldarfineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
