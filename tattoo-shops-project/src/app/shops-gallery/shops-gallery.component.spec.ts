import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsGalleryComponent } from './shops-gallery.component';

describe('ShopsGalleryComponent', () => {
  let component: ShopsGalleryComponent;
  let fixture: ComponentFixture<ShopsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopsGalleryComponent]
    });
    fixture = TestBed.createComponent(ShopsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
