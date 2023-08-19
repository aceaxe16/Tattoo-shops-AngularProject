import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTattooImageComponent } from './new-tattoo-image.component';

describe('NewTattooImageComponent', () => {
  let component: NewTattooImageComponent;
  let fixture: ComponentFixture<NewTattooImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTattooImageComponent]
    });
    fixture = TestBed.createComponent(NewTattooImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
