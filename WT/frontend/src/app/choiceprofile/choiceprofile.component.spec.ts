import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceprofileComponent } from './choiceprofile.component';

describe('ChoiceprofileComponent', () => {
  let component: ChoiceprofileComponent;
  let fixture: ComponentFixture<ChoiceprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
