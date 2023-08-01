import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTattooComponent } from './current-tattoo.component';

describe('CurrentTattooComponent', () => {
  let component: CurrentTattooComponent;
  let fixture: ComponentFixture<CurrentTattooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTattooComponent]
    });
    fixture = TestBed.createComponent(CurrentTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
