import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceloginComponent } from './choicelogin.component';

describe('ChoiceloginComponent', () => {
  let component: ChoiceloginComponent;
  let fixture: ComponentFixture<ChoiceloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
