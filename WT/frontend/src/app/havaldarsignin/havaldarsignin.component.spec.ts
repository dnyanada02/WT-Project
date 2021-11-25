import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavaldarsigninComponent } from './havaldarsignin.component';

describe('HavaldarsigninComponent', () => {
  let component: HavaldarsigninComponent;
  let fixture: ComponentFixture<HavaldarsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavaldarsigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavaldarsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
